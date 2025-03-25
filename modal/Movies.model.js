const mongoose=require("mongoose")
var { Schema }=mongoose;
const movieSchema=new Schema({
    movieName:{type:String},
    heroName:{type:String},
    movieType:{ type:String },
    image:{ type:String },
    cast:{ type:String },
    description:{ type:String },
    venue:{ type:String },
    time:{ type:String },
    date:{ type:String },
    languge:{ type:String },
    price:{ type:String }
});
var Movie= mongoose.model("Movie",movieSchema)
module.exports=Movie;