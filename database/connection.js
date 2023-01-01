import { connect, set } from "mongoose";
import { config } from 'dotenv'
config()
set('strictQuery',true)

const connection = connect(process.env.DATABASE_CONNECTION_URL,{
    'maxPoolSize':5
},(err)=>{
    if(err){
        console.log(err)
    } else {
        console.log('Database Connection Successfull!!')
    }
})

export default connection