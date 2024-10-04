import express from "express";
const app=express();
import stuRoute from "./routes/studentRoutes.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";
mongoose.connect("mongodb://localhost:27017/cybrom").then(()=>{
    console.log("DB successfully connected");
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}));

app.use("/student",stuRoute);
app.listen(8000,()=>{
    console.log("Server runs on this port!");
})