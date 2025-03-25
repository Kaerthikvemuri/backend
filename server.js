var express = require('express');
var app = express();
var cors=require("cors")
var jwt=require("jsonwebtoken");
var bodyParser=require("body-parser")
const User = require('./modal/User.model');
var mongoose = require("mongoose");
const Movie = require('./modal/Movies.model');
var EventModel=require("./modal/Event.model");
const Art = require('./modal/Arts.model');


app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
mongoose.connect("mongodb+srv://vemurikarthik26:Karthik2003@projectno.tc12x.mongodb.net/karthik")
.then(()=>{console.log("Connected devoloper")}).catch((err)=>console.log("Notconnected Devoloper"))

    app.post("/singup",(req,res)=>{
        var user=new User(req.body);
        console.log(req.body)
        user.save()
        .then((res)=>{console.log(res)})
        .catch((err)=>{console.log(err)})
    })
    app.post("/login",function(req,res){
        User.findOne(req.body)
        .then((data)=>{
            // res.json(data)
            if(data){
                console.log(data)
                var token= jwt.sign(req.body,"adooka")
                console.log(token)
                res.json({msg:"success",token:token,role:"admin"})
            }
            else{
                res.json({msg:"fai"})
            }
        })
        .catch((error)=>{
            res.send(error)
        })
        
    })
    app.get("/movies",function(req,res){
        Movie.find({})
        .then((data)=>{
            console.log(data)
            res.send(data)
        })  
    })
    
    app.get("/events",function(req,res){
       EventModel.find({}).then(function(data){
        console.log(data)
        res.send(data)
       })
    })
    app.get("/arts",function(req,res){
       Art.find({}).then(function(data){
        console.log(data)
        res.send(data)
       })
    })
    app.post("/addarts",function(req,res){
        var add=new Art(req.body)
        console.log(req.body)
        add.save().then((data)=>{console.log(data)})
        .catch((err)=>{console.log(err)})
    })
    app.post("/addevents",function(req,res){
        var add=new Event(req.body)
        console.log(req.body)
        add.save().then((data)=>{console.log(data)})
        .catch((err)=>{console.log(err)})
    })
    app.post("/addmovies",function(req,res){
        var add=new Movie(req.body)
        console.log(req.body)
        add.save().then((data)=>{console.log(data)})
        .catch((err)=>{console.log(err)})
    })
    app.get("/:id",function(req,res){
        Movie.findById({_id:req.params.id})
        .then((data)=>{
            console.log(data)
            res.json(data)
        })
        .catch((err)=>{console.log(err)})
        
    })
    app.get("/events/:id",function(req,res){
        EventModel.findById({_id:req.params.id})
        .then((data)=>{
            console.log(data)
            res.json(data)
        })
        .catch((err)=>{console.log(err)})
        
    })
    app.get("/arts/:id",function(req,res){
        Art.findById({_id:req.params.id})
        .then((data)=>{
            console.log(data)
            console.log("karthik")
            res.json(data)
        })
        .catch((err)=>{console.log(err)})
        
    })
    app.listen(4800);
    
    
    
