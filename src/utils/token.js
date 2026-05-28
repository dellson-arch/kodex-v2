const jwt = require('jsonwebtoken')

let generateToken = (userId , email)=>{
     return jwt.sign({userId , email} , process.env.JWT_SECRET,{
        expiresIn : "15m"
     })
}

module.exports = generateToken