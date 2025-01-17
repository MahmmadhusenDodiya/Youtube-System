import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import KafkaConfig from "./kafka/kafka.js";
import convertToHLS from "./hls/transcode.js";
import transcodeFromS3 from "./hls/transcodeFromS3.js";


dotenv.config();

const port=process.env.PORT || 8081;
const app=express();


app.use(cors({
    allowedHeaders:["*"],
    origin:"*"
}));
app.use(express.json());


app.get('/',(req,res)=>{

    transcodeFromS3();



    // convertToHLS();
    
    res.send("Hello World From Transacode service");
    // res.send("Transcoding Completed :)");
});


app.get('/start',(req,res)=>{
    convertToHLS();
    res.send("Transcoding Completed :)");
});


// index.js


const kafkaconfig =  new KafkaConfig();

kafkaconfig.consume("transcode", (value)=>{
   console.log("Consumed Data is= " , value);
   transcodeFromS3(value);
});






app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`);
});