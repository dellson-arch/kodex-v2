const express = require('express')
const app = express()
const errorMiddleware = require("./middlewares/error.middleware");
const noteRoute = require('./routes/notes.routes')

app.use(express.json())

app.use('/api/notes' , noteRoute)
app.use(errorMiddleware)

module.exports = app