import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import * as AdminJSMongoose from '@adminjs/mongoose'
import express from 'express'
import swaggerJsDocs from 'swagger-jsdoc'
import swaggerUIExpress from 'swagger-ui-express'
import cors from 'cors'
import { config } from 'dotenv'

import userRoute from './routes/users.js'
import serviceRoute from './routes/services.js'
import connection from './database/connection.js'
import { UserModel } from './database/models/user.js'
import { ContentModel } from './database/models/content.js'
import userOperations from './database/operations/user.js'
import { passwordChecker } from './utils/password-hasher.js'

config()

const PORT = process.env.PORT || 1234

const authenticate = async (email, password) => {
    const ADMINS = await getAllAdmins()
    for (let index in ADMINS) {
        const ADMIN = ADMINS[index]
        const passwordValid = await passwordChecker(password, ADMIN.password)
        if (email === ADMIN.email && passwordValid) {
            return Promise.resolve(ADMIN)
        }
    }
    return null
}

AdminJS.registerAdapter({
    Resource: AdminJSMongoose.Resource,
    Database: AdminJSMongoose.Database
})

const adminOptions = {
    resources: [
        {
            resource: UserModel,
            options: {
                navigation: {
                    name: 'Users',
                },
                editProperties: ['full_name', 'email', 'isAdmin'],
                listProperties: ['full_name', 'email', 'isAdmin'],
                showProperties: ['full_name', '_id', 'email', 'isAdmin', 'createdAt', 'updatedAt'],
                filterProperties: ['_id', 'full_name', 'email', 'isAdmin', 'updatedAt', 'createdAt']
            },
        },
        {
            resource: ContentModel,
            options: {
                navigation: {
                    name: "Skills",
                },
                editProperties: ['title', 'description', 'feild'],
                listProperties: ['feild', 'title', 'slug'],
                filterProperties: ['_id', 'title', 'description', 'updatedAt', 'createdAt','feild']
            },
        }
    ],
}
const app = express()
const admin = new AdminJS(adminOptions)
const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
    admin,
    {
        authenticate,
        cookieName: 'adminjs',
        cookiePassword: 'sessionsecret',
    }
)

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Prep_Front',
            version: '1.0.0',
            description: 'Your go to Placement guide'
        },
    },
    apis: ['./routes/*.js'],
};


// generating api documentation based of openAPI specifications
const openapiSpecification = swaggerJsDocs(options);
app.use('/api-docs', swaggerUIExpress.serve, swaggerUIExpress.setup(openapiSpecification))

// linking AdminJS to express app
app.use(admin.options.rootPath, adminRouter)

//middlewares
app.use(express.json())
app.use(cors())
app.use('/api/user', userRoute)
app.use('/api/service', serviceRoute)
app.get('/', (req, res) => {
    return res.send(`server is running and current time is ${new Date()}`)
})

app.listen(PORT, () => {
    console.log(`Server Listning on port ${PORT}`)
})

admin.watch()

async function getAllAdmins() {
    return await userOperations.find_admins()
}