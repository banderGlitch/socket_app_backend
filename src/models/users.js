const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Users = new Schema({
    name: String, 
    phoneNumber: String,
    profileImage: {
        type: String,
        default: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'
    },
    about: String,
    selectedCountry: {
        type: Object
    }
})

module.exports = mongoose.model("users", Users)

// import mongoose from "mongoose";

// const Schema = mongoose.Schema;

// const Users = new Schema({
//     name : String,
//     phoneNumber : String,
//     profileImage : {
//         type : String, 
//         default : 'https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg='
//     }, 
//     about : String,

// })

// const UserModal = mongoose.model("users", Users)

// export default UserModal