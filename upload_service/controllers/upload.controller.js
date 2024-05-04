import fs from 'fs'
import path from 'path';
const __dirname = path.resolve();

export const uploadToAWSLocal = async (req, res) => {

  console.log("Upload file is there :) ");
  if (!req.file) {
    console.log("Upload File not Received");
    return res.status(400).send('no File Received');
  }


  const file = req.file;
  console.log(__dirname);
  let filePath = path.resolve(__dirname, '..','AwsLocal');

  console.log('Grandparent directory:', filePath);

  filePath=path.join(filePath, file.originalname);
  console.log("File With Path="+filePath);

  fs.writeFile(filePath, file.buffer, (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('File saved successfully!');
    }
  });




  res.status(200).send({ "message": "Response found 1234" })




}