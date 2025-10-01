

const mongoose  = require("mongoose")

const UserSchema = mongoose.Schema({
    FirstName : {
        type:String,
        required:true
    },
    LastName : {
         type:String,
        required:true
    },
    Email : {
         type:String,
        required:true,
         unique:true
    },
    Contact : {
        type:Number,
        require:true,
        unique:true
    },  
    Dob : {
        type:String,
        require:true
    },
    CityName : { type:String, require:true },
    Password : {
        type:String,        
       required:true,
    },
   Rol : {
       type:String,
       require:true,
        default:"Admin"
    },  
  

}, {timestamps:true})


module.exports = new mongoose.model("User",UserSchema);

// const mongoose  = require("mongoose");

// const UserSchema = new mongoose.Schema({
//     FirstName : { type:String, required:true },
//     LastName  : { type:String, required:true },
//     Email     : { type:String, required:true, unique:true },
//     Contact   : { type:Number, required:true, unique:true },
//     Dob       : { type:String, required:true },
//     CityName  : { type:String, required:true }  // fixed typo
// }, {timestamps:true});

// module.exports = mongoose.model("User", UserSchema);
