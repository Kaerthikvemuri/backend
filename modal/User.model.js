const mongoose=require("mongoose")
var { Schema }=mongoose;
const userSchema=new Schema({
    username:{type:String},
    password:{type:Number},
});
var User= mongoose.model("User",userSchema)
module.exports=User;