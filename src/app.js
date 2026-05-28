const express = require('express')
const app = express()
const errorMiddleware = require("./middleware/error.middleware");
const noteRoute = require('./routes/note.routes')

app.use(express.json())

app.use('/api/notes' , noteRoute)
app.use(errorMiddleware)

module.exports = app