import fs from 'fs'


export const uploadToAWSLocal=async(req,res)=>{

  const filepath = 'C:\\Users\\DELL\\Desktop\\Youtube-hld\\upload_service\\ss.png';


  //Check if file exist
  if(!fs.existsSync(filepath)){
    console.log('File does not exist : ',filepath);
    res.status(500).send({"message":"file Not Found Error"});
    return;
  }
  else {
    console.log("File Found");
  }


  res.status(200).send({"message":"Response found 1234"})




}