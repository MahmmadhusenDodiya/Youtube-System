import fs from 'fs'


export const uploadToAWSLocal=async(req,res)=>{

  //  const filepath = 'C:\\Users\\DELL\\Desktop\\Youtube-hld\\upload_service\\ss.png';
  console.log("Upload file is there :) ");
  if(!req.file){
    console.log("Upload File not Received");
    return res.status(400).send('no File Received');
  }


    const file=req.file;
    const binaryDataBuffer = Buffer.from(file);

    const filePath = '../../AwsLocal';


// Write content to the file
fs.writeFile(filePath, binaryDataBuffer, (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('File saved successfully!');
  }
});


  // //Check if file exist
  // if(!fs.existsSync(filepath)){
  //   console.log('File does not exist : ',filepath);
  //   res.status(500).send({"message":"file Not Found Error"});
  //   return;
  // }
  // else {
  //   console.log("File Found");
  // }


  res.status(200).send({"message":"Response found 1234"})




}