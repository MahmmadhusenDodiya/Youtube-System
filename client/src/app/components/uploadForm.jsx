"use client"
import React,{useState} from 'react'
import axios from 'axios'

const UploadForm = () => {

  const [selectedFile,setSelectedFile]=useState(null);

  const handleFileChange= (e)=>{
    for(let x=1;x<=20000;x++)
      {
        let t=1;
        t++;
        t--;
      }
      //let z=12/0;
      //alert(sdkfnsdnf);
     setSelectedFile(e.target.files[0]);
      console.log("fdfdfdffd");
  };

  const handleSubmit=(e)=>{
    e.preventDefault();

    handleFileUpload(selectedFile);
  }

  const handleFileUpload=async (file)=>{
    

    try{
      const formData=new FormData();
      formData.append('file',file);
      console.log("------------------------"+formData);
      console.log('Going to upload file to server');
      
      const res=await axios.post(`http://localhost:8080/upload`,formData,{
        headers:{
          "Content-Type":"multipart/form-data"
        }
      });
      console.log(res.data);
      
    }
    catch(error)
    {
      console.log("Error Uploading file ",error);
    }

  }


  return (
    <div>
       <form onSubmit={handleSubmit}>
           <input type="file" onChange={handleFileChange} className="bg-red-500" />
           <button type="submit"
                   className="m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
           Upload
           </button>
       </form>
   </div>

  )
}

export default UploadForm;