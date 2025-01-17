"use client"
import React, { useEffect, useState } from 'react';
import axios from "axios"
import dynamic from 'next/dynamic'
import NavBar from '../components/navbar';
import { useRouter } from 'next/navigation';

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const YouTubeHome = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {



        const getVideos = async () => {
            try {
                const res = await axios.get('http://localhost:8082/watch/home');
                console.log(res);
                setVideos(res.data);
                setLoading(false);
            } catch (error) {
                console.log('Error in fetching videos : ', error);
                setLoading(false);
            }
        }
        getVideos();

    }, []);

    const router = useRouter();



    const handleVideoClick = (video) => {
        console.log("clicked on video --------------");
        const queryString = new URLSearchParams({
            id: video.id,
            title: video.title,
            url: video.url,
            author: video.author,
            videoDuration: video.videoDuration,
            description: video.description,
          }).toString();
      
          router.push(`/player?${queryString}`);

        // router.push('player');

    };



    return (
        <div>
            <div className="sticky top-0 z-50">
                <NavBar />
            </div>
            {loading ? (
                <div className='container mx-auto flex justify-center items-center h-screen'>Loading...</div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 m-10">
                    {videos.map(video => (



                        <div onMouseOver={(e) => e.currentTarget.style.borderColor = 'red'}  onMouseOut={(e) => e.currentTarget.style.borderColor = 'transparent'} onClick={()=>handleVideoClick(video)} key={video.id}
                            className="cursercursor-pointer  transform transition-transform duration-300 hover:scale-105 border rounded-md overflow-hidden" >
                            <div >
                                <ReactPlayer url={video.url}
                                    width="360px"
                                    height="180px"
                                    controls={false}
                                />
                            </div>
                            <div className="p-4">
                                <h2 className="text-lg font-semibold mb-2">{video.title}</h2>
                                <p className="text-gray-700 font-bold">Author - {video.author}</p>
                                <p className="text-gray-700 font-bold">Duration -{Math.floor(video.videoDuration * 100) / 100} sec</p>
                                <p className="text-gray-700 font-serif">About : {video.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default YouTubeHome;
