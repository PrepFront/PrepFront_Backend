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
import adminOptions from './config/adminOptions.js'
import authenticate from './utils/adminauth.js'

config()

const PORT = process.env.PORT || 1234

AdminJS.registerAdapter({
    Resource: AdminJSMongoose.Resource,
    Database: AdminJSMongoose.Database
})

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