const models = require('../models');

class user_module {
    static save_user_details = async (req) => {
        try {
            console.log("req body", req.body);
            const { profileImage } = req.body;
            let set_data = req.body;
            if (!!profileImage) {
                set_data.profileImage = profileImage;
            }
            return await models.users.create(set_data);
        } catch (err) {
            throw err;
        }
    }
    static reterive_user = async (req) => {
        try {
            let { limit, pagination } = req.query
            let query = {}
            let projection = {_v: 0 }
            let options = {
                lean: true,
                sort: {_id: -1},
                skip: Number(pagination) ? Number(pagination) * (Number(limit) || 10) : 0,
                limit: Number(limit) || 10
            }
            let users = await models.users.find(query, projection, options)
            console.log("users==========>", users)
            let count = await models.users.countDocuments(query)
            console.log("counts==========>",count)
            return { users , count}

        } catch (err) {
            throw err;
        }
    }
    static verify_user  = async (req) => {
        try {
            console.log("req body", req.body);
            const { otp, user_id } = req.body;
            if (otp == "123456"){
                let user = await models.users.findById(user_id)
                return {user : user , status: true, message: 'success'}
            } else {
                return {user : null , status: false, message: 'Otp Invalid'}

            }
        } catch (err) {
            throw err;
        }
    }
    
}

module.exports = user_module;
