



const StuModel=require("../models/studentModel");
const stuInformation=(req,res)=>{
    res.send("This is students information from cybrom");
}


const studataSave=(req, res)=>{
    console.log(req.body);
    res.send(" data successfully Saved!!!!");
}

module.exports={
    stuInformation,
    studataSave
}

