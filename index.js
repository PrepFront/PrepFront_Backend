// for initiliazing the database connection
import connection from './database/connection.js'

import express from 'express'
import userRoute from './routes/users.js'
import swaggerJsDocs from 'swagger-jsdoc'
import swaggerUIExpress from 'swagger-ui-express'

const app = express()
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


//middlewares
app.use(express.json())
app.use('/user', userRoute)

const PORT = 1234
app.listen(PORT, () => {
    console.log(`Server Listning on port ${PORT}`)
})