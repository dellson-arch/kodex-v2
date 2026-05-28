const noteModel = require("../models/notes.model")
const { noteCreationService , noteReadService} = require("../services/note.service")
const asyncHandler = require("../utils/asyncHandler")
const ApiResponse = require('../utils/apiResponse')

const createNoteController = asyncHandler(async(req,res)=>{
  let result = await noteCreationService(req.body , req.user)

  return res.status(201).json(
    new ApiResponse("user" , "note created sucessfully")
  )
})

const readNoteController = asyncHandler(async(req,res)=>{
  let result = await noteReadService();

  return res.status(201).json(
   new ApiResponse("Notes fetched successfully", result)
  )
})

const UpdateNoteController = asyncHandler(async(req,res)=>{
  let result = await noteUpdateService(req.params , req.body);

  return res.status(200).json(
   new ApiResponse("Notes fetched successfully", result)
  )
})

module.exports = {
    createNoteController
}
