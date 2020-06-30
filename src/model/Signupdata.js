//Accessing Mongoose Package
const mongoose = require('mongoose'); 
//Database Connection
mongoose.connect('mongodb://localhost:27017/library');
//Schema Definintion
const Schema = mongoose.Schema;
const SignupSchema = new Schema({
    name: String,
    address: String,
    emailid: String,
    phoneno:Number,
    password:String,
    confirmpassword: String,
    dateofbirth: String,
    gender:String
});
//Model Creation
var Signupdata = mongoose.model('signupdata',SignupSchema);
module.exports = Signupdata;