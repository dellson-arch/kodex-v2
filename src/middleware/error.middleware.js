let errorMiddleware = (err,req,res,next)=>{
    let statusCode = err.statusCode || 500
    let message = err.message || "Internal server Error"

    return res.status(statusCode).json({
        message : message,
        sucess : false //Because this middleware handles only failed requests or errors, so the API response should indicate failure.
    })
}

module.exports = errorMiddleware