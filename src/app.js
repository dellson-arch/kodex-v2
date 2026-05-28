const express = require('express')
const app = express()
const errorMiddleware = require("./middleware/error.middleware");
const noteRoute = require('./routes/note.routes');
const authRoute = require('./routes/auth.routes')
const cookieParser = require('cookie-parser');

app.use(express.json())
app.use(cookieParser())

app.use('/api/notes' , noteRoute)
app.use('/api/auth' , authRoute)

app.use(errorMiddleware)

module.exports = app