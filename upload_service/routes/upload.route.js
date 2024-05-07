import express from "express"
import uploadFileToS3, { uploadToAWSLocal } from "../controllers/upload.controller.js";
import multer from 'multer'
import multipartUploadFileToS3 from "../controllers/multipartupload.controller.js";
const upload = multer();

const router=express.Router();

// router.post('/',upload.single('file'),uploadToAWSLocal);


// Upload Local Router
//router.post('/', upload.fields([{ name: 'chunk' }, { name: 'totalChunks' }, { name: 'chunkIndex' }]), uploadToAWSLocal);

// Upload S3 Router
// router.post('/', upload.fields([{ name: 'chunk' }, { name: 'totalChunks' }, { name: 'chunkIndex' }]), uploadFileToS3);


//Upload direct from backed to S3 Entire in One request
// router.post('/', multipartUploadFileToS3);

router.get('/',(req,res)=>{

    res.send({"Status":"Helthy"});

});

export default router;