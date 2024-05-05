import fs from 'fs'
import path from 'path';
const __dirname = path.resolve();

export const uploadToAWSLocal = async (req, res) => {

  console.log("Upload file is there :) ");
  if (!req.files || !req.files['chunk'] || !req.body['totalChunks'] || !req.body['chunkIndex'] || !req.body['filename']) {
    console.log("Missing Required Data");
    return res.status(400).send('no File Received');
  }


  const chunk=req.files['chunk'];
  const filename=req.body['filename'];
  const totalChunks=req.body['totalChunks'];
  const chunkIndex=req.body['chunkIndex'];

  console.log("File Name="+filename);
  console.log("totalChunks="+totalChunks);
  console.log("chunk Index="+chunkIndex);
  // console.log("chunk buffer="+chunk[0].buffer);

  // const file = req.file;
  console.log(__dirname);
  let filePath = path.resolve(__dirname, '..','AwsLocal');

  console.log('Grandparent directory:', filePath);

  filePath=path.join(filePath, filename);
  console.log("File With Path="+filePath);

  fs.writeFile(filePath, chunk[0].buffer, (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('File saved successfully!');
    }
  });




  res.status(200).send({ "message": "Response found 1234" })




}