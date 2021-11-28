class errorHttp extends Error {
    constructor(code, mess) {
        super(mess);
        this.name = "errorHttp";
        this.code = code;
        this.message = mess;
    }
}

module.exports = errorHttp;
