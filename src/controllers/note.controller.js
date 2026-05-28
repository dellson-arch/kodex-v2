const noteModel = require("../models/notes.model")
const { registerService } = require("../services/notes.service")
const asyncHandler = require("../utils/asyncHandler")
const ApiResponse = require('../utils/apiResponse')

const createNoteController = asyncHandler(async(req,res)=>{
  let result = await registerService(req.body)

  return res.status(201).json(
    new ApiResponse("user" , "user registered sucessfully")
  )
})

module.exports = {
    createNoteController
}
