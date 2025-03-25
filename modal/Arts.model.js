const mongoose=require("mongoose");
const { title } = require("process");
var { Schema }=mongoose;
const artSchema=new Schema({
    category:{type:String},
    title:{type:String},
    language:{type:String},
    eventdate:{type:String},
    image:{ type:String },
    description:{type:String},
    location:{type:String},
    price:{type:String},
    venue:{type:String}
});
var Art= mongoose.model("Art",artSchema)
module.exports=Art;
