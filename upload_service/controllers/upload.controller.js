import fs from 'fs'
import path from 'path';
import AWS from 'aws-sdk';

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

  if(!chunk) console.log("Chunk Not Found :( ");
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


export default uploadFileToS3;
