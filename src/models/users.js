const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    name: String,
    phoneNumber: String,
    profileImage: {
        type: String, 
        default: 'https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg='
    }, 
    about: String,
});

module.exports = mongoose.model("users", UsersSchema)
