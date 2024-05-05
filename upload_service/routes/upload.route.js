import express from "express"
import { uploadToAWSLocal } from "../controllers/upload.controller.js";
import multer from 'multer'
const upload = multer();

const router=express.Router();

// router.post('/',upload.single('file'),uploadToAWSLocal);
router.post('/', upload.fields([{ name: 'chunk' }, { name: 'totalChunks' }, { name: 'chunkIndex' }]), uploadToAWSLocal);

router.get('/',(req,res)=>{

    res.send({"Status":"Helthy"});

});

export default router;