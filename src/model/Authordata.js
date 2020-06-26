// Accessing mongoose package
const mongoose = require('mongoose');

// Database connection
mongoose.connect('mongodb://localhost:27017/library');

// Schema definition
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
name:String,
bestseller:String,
award:String,
image:String
});

// model creation
var Authordata = mongoose.model('authordata',AuthorSchema);
module.exports = Authordata;