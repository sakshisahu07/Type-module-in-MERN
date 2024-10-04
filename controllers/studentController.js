import StuModel from "../models/studentModel.js";
class StuController{

    static stuInfo=async(req,res)=>{
        res.send("Students informationSSS");
    }
    static stuDisplay=async(req,res)=>{
        res.send("Students record Displayyy");
    }
    static stuInsert=async(req,res)=>{
        const {rollno,name,city,fees}=req.body;
        const data= await StuModel.create({
            rollno:rollno,
            name:name,
            city:city,
            fees:fees
        })
        res.send("data sendd!!!");
    }
    
}

export default StuController;