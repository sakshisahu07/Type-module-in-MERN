const express=require("express");
const app=express();
const mongoose=require("mongoose");
const StuRoute=require("./routes/studentRoutes");
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))


mongoose.connect("mongodb://127.0.0.1:27017/astha").then(()=>{
    console.log("DB Successfully connected");
});
// parse application/x-www-form-urlencoded
// parse application/json

app.use("/students",StuRoute);

app.listen(9000 ,()=>{
    console.log("server runs on this port 9000");
})