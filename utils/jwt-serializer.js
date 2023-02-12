import jwt from 'jsonwebtoken'
import { config } from 'dotenv'
config()

function generateAccessToken(obj) {
    const key = jwt.sign({
        data:obj
    }, process.env.ACCESS_TOKEN_SECRET_KEY,{ expiresIn: '100h' });
    return key
}

function generateRefreshToken(obj) {
    const key = jwt.sign({
        data: obj
    }, process.env.REFRESH_TOKEN_SECRET_KEY);
    return key
}

function verifyAccessToken(token){
    return jwt.verify(token,process.env.ACCESS_TOKEN_SECRET_KEY,(err,decoded)=>{
        if(err) return null
        return decoded.data
    })
}

function generateAcessTokenFromRefreshToken(refresh_token){
    return jwt.verify(refresh_token,process.env.REFRESH_TOKEN_SECRET_KEY,(err,decoded)=>{
        if(err) return null
        return generateAccessToken(decoded.data) 
    })
}

export { generateAccessToken, generateRefreshToken, verifyAccessToken, generateAcessTokenFromRefreshToken }