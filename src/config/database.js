const mongoose = require('mongoose');

main().then(res=> console.log("db connected successfully...!!!"))
main().catch(err => console.log(err));



async function main() {
    await mongoose.connect('mongodb+srv://nernaykumar98:QEEFqBlmPNA207DV@cluster0.okwzscw.mongodb.net/');
}