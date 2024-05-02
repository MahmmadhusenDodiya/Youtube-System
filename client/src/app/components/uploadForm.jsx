"use client"
import React,{useState} from 'react'
import axios from 'axios'

const UploadForm = () => {

  const [selectedFile,setSelectedFile]=useState(null);

  const handleFileChange= (e)=>{
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit=()=>{
    e.preventDefault();
    handlFileUpload(selectedFile);
  }

  const handleFileUpload=async (file)=>{
    try{
      const formData=new FormData();
      formData.append('file',file);
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
    <div>UploadForm</div>
  )
}

export default UploadForm;