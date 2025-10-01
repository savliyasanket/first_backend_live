const bcrypt = require("bcryptjs");
const UserModel = require("../models/User");
const jwt = require("jsonwebtoken")


// -------------------------------------------------register------------------------------------------------------

async function register (req,res) {

const {Password} = req.body;

console.log(Password);


// Hashing password
const hashedPassword = await bcrypt.hash(Password, 10);
console.log(hashedPassword);



const user = await UserModel.create({...req.body, Password:hashedPassword})  

res.json({
    status:201,
    message:"register succes",
    data:user
})

}


// -------------------------------------------------login------------------------------------------------------



async function login (req,res) {

  
    
    const {Email,Password} = req.body;


    const user = await UserModel.findOne({Email}).lean();


    if(!user) {

        res.json({
            status:404,
            message:"user not found"
        })
    }

    const isMathed = await bcrypt.compare( Password, user.Password)

    if(!isMathed){
        res.json({
            status:400,
            message:"password is invalid"
        })
    }


    const token = await jwt.sign({
        id : user._id
    },process.env.Jwt_secretKey)

res.cookie("token",token)
 

    return res.render("index");
}

module.exports = {register,login}