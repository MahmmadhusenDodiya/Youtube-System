"use client"
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });


const Room = () => {
    const [userStream, setUserStream] = useState();

    const streamUser = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
        })

        setUserStream(stream)
    }



    return (
        <div>
            <button onClick={streamUser} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Stream Button
            </button>

            <div><ReactPlayer url={userStream}
                width="1080px" height="720px" controls={true}
            /></div>


            {/* <div><ReactPlayer url='C:\Users\DELL\Downloads\www_screencapture_com_2024-2-5_20_44'
                width="1080px" height="720px" controls={true}
            /></div> */}

            <div><ReactPlayer url='https://youtu.be/HrnrqYxYrbk?si=mXCrwTo3-KExT4H5'
                width="1080px" height="720px" controls={true}
            /></div>
        </div>
    )
}

export default Room;