const noteModel = require("../models/notes.model");
const ApiError = require("../utils/apiError");

const noteCreationService = async (data) => {
  const { title, description } = data;

  if(!title || !description){
    throw new ApiError(200 , "all fields are required")
  }
  
  const newNote = await noteModel.create({
    title,
    description,
  });

  return newNote;
};


const noteReadService = async (data) => {
   const notes = await noteModel.find()

   return notes
};

module.exports = { noteCreationService , noteReadService};

