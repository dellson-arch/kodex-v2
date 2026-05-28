const { default: userModel } = require("../models/user.model")
const ApiError = require("../utils/apiError")
const generateToken = require('../utils/token')

const userService = async(data)=>{
    const {name , email} = data

    if(!name || !email){
       throw new ApiError(200 , "All fields are required")
    }

    const newUser = await userModel.create({ name, email });

    let token = generateToken(newUser._id , newUser.email)

    return {newUser , token}

}

module.exports = userService