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
            console.log('this is Upload id = '+ uploadId);

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

                const uploadPromise=axios.post('http://localhost:8080/upload', chunkFormData, {
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
                uploadId: uploadId
            });

            console.log(completeRes.data);
        } catch (error) {
            console.error('Error uploading file:', error);
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