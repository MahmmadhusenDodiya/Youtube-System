"use client"
import React, { useRef, useEffect } from 'react';
import Hls from 'hls.js';


const VideoPlayer = () => {
   const videoRef = useRef(null);
   const src = "https://youtube072.s3.ap-south-1.amazonaws.com/hls/32975-394513987_mp4_master.m3u8";

   useEffect(() => {
       const video = videoRef.current;

       if (Hls.isSupported()) {
           console.log("HLS is supported");
               console.log(src);
               const hls = new Hls();
               hls.attachMedia(video);
               hls.loadSource(src);
               hls.on(Hls.Events.MANIFEST_PARSED, function () {
                   console.log("playing video");
                   video.play();
               });
       } else {
           console.log('HLS is not supported');
          // Error msg with orignal video

       }
   }, [src]);

   return <video ref={videoRef} controls />;
};

export default VideoPlayer;