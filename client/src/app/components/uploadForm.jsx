"use client"
import React, { useState,useEffect} from 'react'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { redirect, useRouter } from 'next/navigation'

const UploadForm = () => {



    const {data}=useSession();
    const [selectedFile, setSelectedFile] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');


    useEffect(() => {
        console.log('this is data :  ', data);

        if(!data) {
            console.log("data not found redirect to home");
          console.log('redirecting');
          redirect("/");
        }
      }, [])
     

    const handleFileChange = (e) => {
        // for (let x = 1; x <= 20000; x++) {
        //     let t = 1;
        //     t++;
        //     t--;
        // }
        //let z=12/0;
        //alert(sdkfnsdnf);
        setSelectedFile(e.target.files[0]);
        // console.log("fdfdfdffd");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        handleFileUpload(selectedFile);
    }

    const handleFileUpload = async (file) => {

        // ------------ for simple Image Upload ------------------
        /*
         try {
             const formData = new FormData();
             formData.append('file', file);
             console.log("------------------------" + formData);
             console.log('Going to upload file to server');
             const res = await axios.post(`http://localhost:8080/upload`, formData, {
                 headers: {
                     "Content-Type": "multipart/form-data"
                 }
             });
             console.log(res.data);
 
         }
         catch (error) {
 
         }
         */



        // const chunksize = 5 * 1024 * 1024;
        // const totalchunks = Math.ceil((selectedFile.size / chunksize));
        // console.log("selectedFile size =" + selectedFile.size);
        // console.log("this is chunk size=" + chunksize);
        // console.log("total chunks=" + totalchunks);


        try {

            // Some Validation 
            if (!title || !author) {
                alert('Title and Author are required fields.');
                return;
            }


            // const completeRes = await axios.post('http://localhost:8080/upload/complete', {
            //     filename: selectedFile.name,
            //     totalChunks: totalChunks,
            //     uploadId: uploadId,
            //     title: title,
            //     description: description,
            //     author: author
            // });

            // As 5 MB is minimum size for AWS Multipart
            const chunksize = 5 * 1024 * 1024;
            const totalchunks = Math.ceil((selectedFile.size / chunksize));
            console.log("selectedFile size =" + selectedFile.size);
            console.log("this is chunk size=" + chunksize);
            console.log("total chunks=" + totalchunks);

            //---------------------------------------------------------
            // Step :1
            const formData = new FormData();
            formData.append('filename', selectedFile.name);
            const initializeRes = await axios.post('http://localhost:8080/upload/initialize', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            );
            const { uploadId } = initializeRes.data;
            console.log('this is Upload id = ' + uploadId);

            //----------------------------------------------------------------------
            // Step :2
            const chunkSize = 5 * 1024 * 1024; // 5 MB chunks
            const totalChunks = Math.ceil(selectedFile.size / chunkSize);

            let start = 0;
            const uploadPromises = [];

            for (let chunkIndex = 0; chunkIndex < totalChunks; chunkIndex++) {

                const chunk = selectedFile.slice(start, start + chunkSize);
                start += chunkSize;
                const chunkFormData = new FormData();
                chunkFormData.append('filename', selectedFile.name);
                chunkFormData.append('chunk', chunk);
                chunkFormData.append('totalChunks', totalChunks);
                chunkFormData.append('chunkIndex', chunkIndex);
                chunkFormData.append('uploadId', uploadId);

                const uploadPromise = axios.post('http://localhost:8080/upload', chunkFormData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                uploadPromises.push(uploadPromise);
            }


            await Promise.all(uploadPromises);

            //----------------------------------------------------------------------
            // Step :3


            const completeRes = await axios.post('http://localhost:8080/upload/complete', {
                filename: selectedFile.name,
                totalChunks: totalChunks,
                uploadId: uploadId,
                title: title,
                description: description,
                author: author
            });
            console.log("-------------------------ok ok ok ok :))) ");
            console.log(completeRes.data);
            alert("Success");
        } catch (error) {
            console.error('Error uploading file:', error);
        }

    }


    return (
        // <div>
        //     <form onSubmit={handleSubmit}>
        //         <input type="file" onChange={handleFileChange} className="bg-red-500" />
        //         <button type="submit"
        //             className="m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        //             Upload
        //         </button>
        //     </form>
        // </div>


        
<div className='container mx-auto max-w-lg p-10'>
    <form encType="multipart/form-data">
      <div className="mb-4">
        <input type="text"
               name="title"
               placeholder="Title"
               value={title}
               onChange={(e) => setTitle(e.target.value)}
               required
               className="px-3 py-2 w-full border rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <input type="text"
               name="description"
               placeholder="Description"
               value={description}
               onChange={(e) => setDescription(e.target.value)}
               className="px-3 py-2 w-full border rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <input type="text"
               name="author"
               placeholder="Author"
               value={author}
               onChange={(e) => setAuthor(e.target.value)}
               required
               className="px-3 py-2 w-full border rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="mb-4">
        <input type="file"
               name="file"
               onChange={handleFileChange}
               className="px-3 py-2 w-full border rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <button
        type="button"
        onClick={handleFileUpload}
        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Upload
      </button>


        

    </form>
  </div>

    )
}

export default UploadForm;