// 'use client';

// import { useSearchParams } from 'next/navigation';
// import React, { useRef, useEffect } from 'react';
// import Hls from 'hls.js';
// import NavBar from '../components/navbar';
// const Player = () => {

//     function convertUrl(originalUrl) {
//         // Parse the URL to extract the path
//         const url = new URL(originalUrl);
//         const path = url.pathname;

//         // Extract the file name without the extension
//         const fileName = path.split('/').pop().split('.').slice(0, -1).join('.');

//         // Construct the new path
//         const newPath = path.replace(fileName + '.mp4', `hls/${fileName}_mp4_master.m3u8`);

//         // Return the new URL
//         return `${url.origin}${newPath}`;
//     }

//     const searchParams = useSearchParams();
//     const title = searchParams.get('title');
//     const simpleurl = searchParams.get('url');

//     let hlsurl = convertUrl(simpleurl);

//     const videoRef = useRef(null);

//     useEffect(() => {
//         const video = videoRef.current;

        
//         if (Hls.isSupported()) {
//             const hls = new Hls();
//             hls.attachMedia(video);
//             hls.loadSource(hlsurl);
//             hls.on(Hls.Events.MANIFEST_PARSED, function () {
//                 video.play();
//             });
//         } else {
//             console.log('HLS is not supported go for simple play');
//         }
//     }, [hlsurl]);

//     return (
//         <div>
//         <NavBar/>
//         <div className="flex flex-col items-center bg-gray-100 p-8 rounded-lg shadow-md max-w-4xl mx-auto">
//             <h1 className="text-3xl font-bold text-gray-800 mb-4">{title || 'Video Player'}</h1>
//             <video ref={videoRef} controls className="w-full max-w-4xl h-auto border-4 border-gray-300 rounded-lg" />

//         </div>
//         </div>
//     );
// };

// export default Player;


'use client';

import { useSearchParams } from 'next/navigation';
import React, { useRef, useEffect, useState } from 'react';
import Hls from 'hls.js';
import axios from 'axios';
import ReactPlayer from 'react-player';
import NavBar from '../components/navbar';

const Player = () => {
    const searchParams = useSearchParams();
    const title = searchParams.get('title');
    const simpleurl = searchParams.get('url');

    const [hlsUrlValid, setHlsUrlValid] = useState(false);
    const [urlChecked, setUrlChecked] = useState(false);
    const videoRef = useRef(null);

    function convertUrl(originalUrl) {
        const url = new URL(originalUrl);
        const path = url.pathname;
        const fileName = path.split('/').pop().split('.').slice(0, -1).join('.');
        const newPath = path.replace(fileName + '.mp4', `hls/${fileName}_mp4_master.m3u8`);
        return `${url.origin}${newPath}`;
    }

    let hlsurl = convertUrl(simpleurl);

    useEffect(() => {
        const checkHlsUrl = async () => {
            try {
                const response = await axios.head(hlsurl);
                if (response.status === 200) {
                    setHlsUrlValid(true);
                }
            } catch (error) {
                setHlsUrlValid(false);
            } finally {
                setUrlChecked(true);
            }
        };

        checkHlsUrl();
    }, [hlsurl]);

    useEffect(() => {
        const video = videoRef.current;

        if (urlChecked && hlsUrlValid && Hls.isSupported()) {
            const hls = new Hls();
            hls.attachMedia(video);
            hls.loadSource(hlsurl);
            hls.on(Hls.Events.MANIFEST_PARSED, function () {
                video.play();
            });
        }
    }, [hlsurl, hlsUrlValid, urlChecked]);

    return (
        <div>
            <NavBar />
            <div className="flex flex-col items-center bg-gray-100 p-8 rounded-lg shadow-md max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{title || 'Video Player'}</h1>
                {urlChecked ? (
                    hlsUrlValid && Hls.isSupported() ? (
                        <video ref={videoRef} controls className="w-full max-w-4xl h-auto border-4 border-gray-300 rounded-lg" />
                    ) : (
                        <ReactPlayer url={simpleurl} controls width="100%" height="auto" className="border-4 border-gray-300 rounded-lg" />
                    )
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </div>
    );
};

export default Player;
