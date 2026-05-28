require('dotenv').config()
const app = require('./src/app')
const connectToDb = require('./src/config/db')

const port = process.env.PORT || 5000

connectToDb()
app.listen(port , ()=>{
    console.log(`server is running in port ${port}`)
})