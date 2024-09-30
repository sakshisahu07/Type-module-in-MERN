
const express=require("express");
const route=express.Router();
const stuController=require("../controllers/studentController");

route.get("/stuinfo",stuController.stuInformation);
route.post("/datasave",stuController.studataSave);
module.exports=route;