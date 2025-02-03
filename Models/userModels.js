const {Schema , model } =require('mongoose');


// creating schema
// Schema deines the structure of data
const userSchema = new Schema({
    name:
{
    type:String,
    required:true,
    maxlength:50,
},
email:
{
    type:String,
    required:true,
},
password:
{
type:String,
required:true,
minlength:8,
maxlength:16,
},
});

// creating Model using Schema
// Model definesas an interface to interact with mongoDB
const userModel = model('User',userSchema);


// export the model
module.exports = userModel