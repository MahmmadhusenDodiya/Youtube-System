"use client"
import React, { useState } from 'react'
import axios from 'axios'

const UploadForm = () => {

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    for (let x = 1; x <= 20000; x++) {
      let t = 1;
      t++;
      t--;
    }
    //let z=12/0;
    //alert(sdkfnsdnf);
    setSelectedFile(e.target.files[0]);
    console.log("fdfdfdffd");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleFileUpload(selectedFile);
  }

  const handleFileUpload = async (file) => {


    try {
      const chunksize = 1 * 1024 * 1024;
      const totalchunks = Math.ceil((file.size / chunksize));
      console.log("file size =" + file.size);
      console.log("this is chunk size=" + chunksize);
      console.log("total chunks=" + totalchunks);


      const formData = new FormData();
      formData.append('file', file);
      console.log("------------------------" + formData);
      console.log('Going to upload file to server');

      let start = 0;

      for(let chunkIndex = 0; chunkIndex < totalchunks; chunkIndex++) {
        const chunk = file.slice(start, start + chunksize);
        start += chunksize;

        const formData = new FormData();
        formData.append('filename', chunkIndex+""+file.name);
        formData.append('chunk', chunk);
        formData.append('totalChunks', totalchunks);
        formData.append('chunkIndex', chunkIndex);

        console.log('Uploading chunk', chunkIndex + 1, 'of', totalchunks);

        const res = await axios.post('http://localhost:8080/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          } });
        console.log(res.data);
      }


      // const res=await axios.post(`http://localhost:8080/upload`,formData,{
      //   headers:{
      //     "Content-Type":"multipart/form-data"
      //   }
      // });
      // console.log(res.data);

    }
    catch (error) {
      console.log("Error Uploading file ", error);
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