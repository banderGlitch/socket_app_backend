const user_module = require("./user.modules.js");

class user_controller extends user_module {

    static create_user = async (req, res) => {
        try {
            console.log("controller response", req.body);
            let response = await this.save_user_details(req);
            let message = 'Success';
            res.send({
                success: true,
                message: message,
                data: response
            });
        } catch (error) {
            let status_code = error.status && error.status.code !== undefined ? error.status.code : 500;
            let type = error.type !== undefined ? error.type : 'Bad Request';
            let message = error.custom_msg !== undefined ? error.custom_msg : 'Something went wrong';
            res.status(status_code).send({
                success: false,
                error: type,
                message: message
            });
        }
    }
    
    static get_users = async (req, res) => {
        try {
            console.log("controller response", req.body);
            let response = await this.reterive_user(req);
            let message = 'Success';
            let status = 200
            res.status(status).send({
                success: true,
                message: message,
                data: response
            });
        } catch (error) {
            let status_code = error.status && error.status.code !== undefined ? error.status.code : 500;
            let type = error.type !== undefined ? error.type : 'Bad Request';
            let message = error.custom_msg !== undefined ? error.custom_msg : 'Something went wrong';
            res.status(status_code).send({
                success: false,
                error: type,
                message: message
            });
        }
    }
}

module.exports = user_controller;

