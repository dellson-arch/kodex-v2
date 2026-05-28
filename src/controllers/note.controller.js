const noteModel = require("../models/notes.model")
const { noteCreationService } = require("../services/note.service")
const asyncHandler = require("../utils/asyncHandler")
const ApiResponse = require('../utils/apiResponse')

const createNoteController = asyncHandler(async(req,res)=>{
  let result = await noteCreationService(req.body)

  return res.status(201).json(
    new ApiResponse("user" , "user registered sucessfully")
  )
})

module.exports = {
    createNoteController
}
