'use client';

import { useSearchParams } from 'next/navigation';
import React, { useRef, useEffect } from 'react';
import Hls from 'hls.js';


const Player = () => {

  function convertUrl(originalUrl) {
    // Parse the URL to extract the path
    const url = new URL(originalUrl);
    const path = url.pathname;
  
    // Extract the file name without the extension
    const fileName = path.split('/').pop().split('.').slice(0, -1).join('.');
  
    // Construct the new path
    const newPath = path.replace(fileName + '.mp4', `hls/${fileName}_mp4_master.m3u8`);
  
    // Return the new URL
    return `${url.origin}${newPath}`;
  }


  const searchParams = useSearchParams();
  const title = searchParams.get('title');
  const simpleurl = searchParams.get('url');

  // url is =https://youtube072.s3.ap-south-1.amazonaws.com/32975-394513987.mp4

  console.log("title is="+title);
  console.log("url is ="+simpleurl);

  let hlsurl=convertUrl(simpleurl);

  console.log("this is HLS URL ="+hlsurl);
  
  const videoRef = useRef(null);

  useEffect(() => {
      const video = videoRef.current;

      if (Hls.isSupported()) {
          console.log("HLS is supported");
              console.log(hlsurl);
              const hls = new Hls();
              hls.attachMedia(video);
              hls.loadSource(hlsurl);
              hls.on(Hls.Events.MANIFEST_PARSED, function () {
                  console.log("playing video");
                  video.play();
              });
      } else {
          console.log('HLS is not supported');
         // Error msg with orignal video

      }
  }, [hlsurl]);

  return <video ref={videoRef} controls />;


};



const VideoPlayer = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get('title');
  const url = searchParams.get('url');


  const videoRef = useRef(null);
  const src = "temp";

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

export default Player;
