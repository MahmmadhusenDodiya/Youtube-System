import express from "express"
import uploadFileToS3, { completeUpload, initializeUpload, uploadChunk, uploadToAWSLocal } from "../controllers/upload.controller.js";
import multer from 'multer'
import multipartUploadFileToS3, { uploadToDb } from "../controllers/multipartupload.controller.js";
const upload = multer();

const router=express.Router();

// router.post('/',upload.single('file'),uploadToAWSLocal);


// Upload Local Router
//router.post('/', upload.fields([{ name: 'chunk' }, { name: 'totalChunks' }, { name: 'chunkIndex' }]), uploadToAWSLocal);

// Upload S3 Router
// router.post('/', upload.fields([{ name: 'chunk' }, { name: 'totalChunks' }, { name: 'chunkIndex' }]), uploadFileToS3);


//Upload direct from backed to S3 Entire in One request
// router.post('/', multipartUploadFileToS3);

router.post('/uploadToDB', uploadToDb);


// Route for initializing upload step1 
router.post('/initialize', upload.none(), initializeUpload);

// Route for uploading individual chunks step2
router.post('/', upload.single('chunk'), uploadChunk);

// Route for completing the upload step3
router.post('/complete', completeUpload);

router.get('/',(req,res)=>{

    res.send({"Status":"Helthy"});

});

export default router;