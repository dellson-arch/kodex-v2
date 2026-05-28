const {body , validationResult} = require('express-validator')

const respondWithValidationResult = (req,res,next)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors : errors.array()
        })
    }
    next()
}


const notesValidation = [
    body('title')
    .isString()
    .withMessage("title must be required")
    .isLength({min : 3})
    .withMessage("min length of 3 characters is required"),

    body('description')
    .isString()
    .withMessage("description must be needed")
    .isLength({min:6})
    .withMessage("min 6 characters are required"),

    respondWithValidationResult
]

module.exports = {notesValidation}