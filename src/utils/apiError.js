class ApiError extends Error {
    constructor(statusCode , message){
        super(message)

        this.statusCode = stausCode
        this.message = message
    }
}

module.exports = ApiError
