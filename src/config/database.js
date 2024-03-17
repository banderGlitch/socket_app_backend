const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb+srv://nernaykumar98:QEEFqBlmPNA207DV@cluster0.okwzscw.mongodb.net/');
}

module.exports = { main };


// import mongoose from 'mongoose';

// export async function main() {
//     await mongoose.connect('mongodb+srv://nernaykumar98:QEEFqBlmPNA207DV@cluster0.okwzscw.mongodb.net/');
// }