const mongoose=require("mongoose")
var { Schema } = mongoose;

const employeeSchema= new Schema({
    firstname:{ type:String},
     lastname:{ type:String },
    age:{ type:Number},
    gender:{ type:String},

});
var Employee=mongoose.model("Employee",employeeSchema)
module.exports=Employee;