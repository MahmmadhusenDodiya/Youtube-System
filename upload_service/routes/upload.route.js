import express from "express"
import { uploadToAWSLocal } from "../controllers/upload.controller.js";

const router=express.Router();

router.post('/',uploadToAWSLocal);


router.get('/',(req,res)=>{

    res.send({"Status":"Helthy"});

});

export default router;