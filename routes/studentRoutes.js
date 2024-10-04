

import express from "express";
const route=express.Router();

import StuController from "../controllers/studentController.js";

route.get("/info",StuController.stuInfo);
route.get("/display",StuController.stuDisplay);
route.post("/insert",StuController.stuInsert);


export default route;
