class ApiResponse {
    constructor(message , data = null){ //why null ? Avoids undefined , Frontend can always expect a data field , Makes API cleaner and predictable ; Without = null, if data is not passed: data === undefined , which is less explicit than null.
       this.sucess = true
       this.message = message
       this.data = data
    }
}
