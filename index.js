// for initiliazing the database connection
import connection from './database/connection.js'

import express from 'express'
import userRoute from './routes/users.js'
const app = express()

//middlewares
app.use(express.json())
app.use('/user',userRoute)

const PORT = 1234
app.listen(PORT,()=>{
    console.log(`Server Listning on port ${PORT}`)
})