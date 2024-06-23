import fs from 'fs'
import path from 'path';
import AWS from 'aws-sdk';
import { addVideoDetailsToDB } from '../db/db.js';
import { sendMessageForEncoding } from './kafkapublisher.controller.js';

const __dirname = path.resolve();

export const uploadToAWSLocal = async (req, res) => {

  console.log("Upload file is there :) ");
  if (!req.files || !req.files['chunk'] || !req.body['totalChunks'] || !req.body['chunkIndex'] || !req.body['filename']) {
    console.log("Missing Required Data");
    return res.status(400).send('no File Received');
  }
  const chunk = req.files['chunk'];
  const filename = req.body['filename'];
  const totalChunks = req.body['totalChunks'];
  const chunkIndex = req.body['chunkIndex'];

  console.log("File Name=" + filename);
  console.log("totalChunks=" + totalChunks);
  console.log("chunk Index=" + chunkIndex);
  // console.log("chunk buffer="+chunk[0].buffer);

  // const file = req.file;
  console.log(__dirname);
  let filePath = path.resolve(__dirname, '..', 'AwsLocal');

  console.log('Grandparent directory:', filePath);

  filePath = path.join(filePath, filename);
  console.log("File With Path=" + filePath);

  fs.writeFile(filePath, chunk[0].buffer, (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('File saved successfully!');
    }
  });
  res.status(200).send({ "message": "Response found 1234" })
}

// In Same API 
const uploadFileToS3 = async (req, res) => {


  console.log("upload request is receievd");

  if (!req.files || !req.files['chunk'] || !req.body['totalChunks'] || !req.body['chunkIndex'] || !req.body['filename']) {
    console.log("Missing Required Data");
    return res.status(400).send('no File Received');
  }

  const chunk = req.files['chunk'];
  const filename = req.body['filename'];
  const totalChunks = req.body['totalChunks'];
  const chunkIndex = req.body['chunkIndex'];

  if (!chunk) console.log("Chunk Not Found :( ");
  console.log("File Name=" + filename);
  console.log("totalChunks=" + totalChunks);
  console.log("chunk Index=" + chunkIndex);


  console.log("file is in request");
  const file = req.file;
  AWS.config.update({
    region: 'ap-south-1',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  });


  const params = {
    Bucket: process.env.AWS_BUCKET,
    Key: filename,
    Body: chunk[0].buffer
  };



  const s3 = new AWS.S3();


  // Upload the file to S3
  s3.upload(params, (err, data) => {
    if (err) {
      console.log('Error uploading file:', err);
      res.status(404).send('File could not be uploaded!');
    } else {
      console.log('File uploaded successfully. File location:', data.Location);
      res.status(200).send('File uploaded successfully');
    }
  });
}

//--------------------------------------------------------------
// All diffrent APIs

// Initialize upload one time
export const initializeUpload = async (req, res) => {
  try {
    console.log('Initialising Upload');
    const { filename } = req.body;
    console.log(filename);
    const s3 = new AWS.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: 'ap-south-1'
    });
    const bucketName = process.env.AWS_BUCKET;

    const createParams = {
      Bucket: bucketName,
      Key: filename,
      ContentType: 'video/mp4'
    };

    const multipartParams = await s3.createMultipartUpload(createParams).promise();
    console.log("multipartparams---- ", multipartParams);
    const uploadId = multipartParams.UploadId;

    res.status(200).json({ uploadId });
  } catch (err) {
    console.error('Error initializing upload:', err);
    res.status(500).send('Upload initialization failed');
  }
};

// Upload single chunk called many times
export const uploadChunk = async (req, res) => {
  try {
    console.log('Uploading Chunk');
    const { filename, chunkIndex, uploadId } = req.body;
    const s3 = new AWS.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: 'ap-south-1'
    });
    const bucketName = process.env.AWS_BUCKET;

    const partParams = {
      Bucket: bucketName,
      Key: filename,
      UploadId: uploadId,
      PartNumber: parseInt(chunkIndex) + 1,
      Body: req.file.buffer,
    };

    const data = await s3.uploadPart(partParams).promise();
    console.log("data-------", data);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error uploading chunk:', err);
    res.status(500).send('Chunk could not be uploaded');
  }
};

// Complete upload one time
export const completeUpload = async (req, res) => {
  try {
    console.log('Complete API Called : ) ');
    const { filename, totalChunks, uploadId, title, description, author } = req.body;

    console.log("this is request body for complete API =" + req.body);


    const s3 = new AWS.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: 'ap-south-1'
    });
    const bucketName = process.env.AWS_BUCKET;

    const completeParams = {
      Bucket: bucketName,
      Key: filename,
      UploadId: uploadId,
    };

    // Listing parts using promise
    const data = await s3.listParts(completeParams).promise();

    const parts = data.Parts.map(part => ({
      ETag: part.ETag,
      PartNumber: part.PartNumber
    }));

    completeParams.MultipartUpload = {
      Parts: parts
    };

    // Completing multipart upload using promise
    const uploadResult = await s3.completeMultipartUpload(completeParams).promise();

    console.log("this is Response Data:  ", uploadResult);

    console.log("Going to Update data in DB also");

    // await addVideoDetailsToDB("videoDetails.title", "videoDetails.description", "videoDetails.author", uploadResult.Location);
    const url = uploadResult.Location;
    console.log("Video uploaded at ", url);

    await addVideoDetailsToDB(title, description, author, url);

    //upload completed then publish message to kafka
    console.log("going to send message to kafka for encoding title="+title);
    await sendMessageForEncoding(title,url);
    console.log("message published to kafka to encoding title="+title);

    return res.status(200).json({ message: "Uploaded successfully :)" });

  } catch (error) {
    console.log('Error completing upload :', error);
    return res.status(500).send('Upload completion failed');
  }
};


export default uploadFileToS3;
