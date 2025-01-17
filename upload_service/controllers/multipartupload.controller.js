import AWS from 'aws-sdk';
import fs from 'fs';
import { addVideoDetailsToDB } from '../db/db.js';

const multipartUploadFileToS3 = async (req, res) => {
   console.log('Upload req received');

   const filePath = 'C:/Users/DELL/Videos/Captures/Demo.mp4';

   // Check if the file exists
   if (!fs.existsSync(filePath)) {
       console.log('File does not exist: ', filePath);
       return res.status(400).send('File does not exist');
   }

   AWS.config.update({
       region: 'ap-south-1',
       accessKeyId: process.env.AWS_ACCESS_KEY_ID,
       secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
   });

   const s3 = new AWS.S3();
   const uploadParams = {
       Bucket: process.env.AWS_BUCKET,
       Key: "test-key",
       ACL: 'public-read',   // Access Control List 
       ContentType: 'video/mp4'
   };

   try {
       console.log('Creating MultiPart Upload');

       // step 1
       console.log("------step 1 started------");
       const multipartParams = await s3.createMultipartUpload(uploadParams).promise();
       const fileSize = fs.statSync(filePath).size;
       const chunkSize = 5 * 1024 * 1024; // 5 MB
       const numParts = Math.ceil(fileSize / chunkSize);
       console.log("------step 1 Ended------");


       // step 2
       const uploadedETags = []; // Store ETags for uploaded parts
       console.log("------step 2 started------");
       for (let i = 0; i < numParts; i++) {
           const start = i * chunkSize;
           const end = Math.min(start + chunkSize, fileSize);

           const partParams = {
               Bucket: uploadParams.Bucket,
               Key: uploadParams.Key,
               UploadId: multipartParams.UploadId,
               PartNumber: i + 1,
               Body: fs.createReadStream(filePath, { start, end }),
               ContentLength: end - start
           };

           const data = await s3.uploadPart(partParams).promise();
           console.log(`Uploaded part ${i + 1}: ${data.ETag}`);

           uploadedETags.push({ PartNumber: i + 1, ETag: data.ETag });
       }
       console.log("------step 2 Ended------");

       console.log("------step 3 started------");
       // step 3
       const completeParams = {
           Bucket: uploadParams.Bucket,
           Key: uploadParams.Key,
           UploadId: multipartParams.UploadId,
           MultipartUpload: { Parts: uploadedETags }
       };

       console.log('Completing MultiPart Upload');
       const completeRes = await s3.completeMultipartUpload(completeParams).promise();
       console.log(completeRes);
       console.log("------step 3 Ended------");


       console.log('File uploaded successfully');

       res.status(200).send('File uploaded successfully');

   } catch (err) {
       console.log('Error uploading file:', err);
       res.status(500).send('File could not be uploaded');
   }
};


export const uploadToDb=async (req,res)=>{
    console.log(" adding data to db");
    try{
        const videoDetails=req.body;
        await addVideoDetailsToDB(videoDetails.title, videoDetails.description, videoDetails.author, videoDetails.url);
        return res.status(200).send("Success");
    }
    catch(error){
        console.log("Error Occure While adding video meta-data to DB Error="+error);
        return res.status(400).send(error);
    }
}










export default multipartUploadFileToS3;

