const userService = require("../services/register.service")
const asyncHandler = require("../utils/asyncHandler")
const ApiResponse = require("../utils/apiResponse")

const registerController = asyncHandler(async(req,res)=>{
  let result = await userService(req.body)
  res.cookie('token' , result.token)

  return res.status(201).json(
    new ApiResponse("user" , "user created sucessfully")
  )
})

module.exports = {registerController}