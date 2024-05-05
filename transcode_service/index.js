import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import KafkaConfig from "./kafka/kafka.js";


dotenv.config();

const port=process.env.PORT || 8081
const app=express();


app.use(cors({
    allowedHeaders:["*"],
    origin:"*"
}));
app.use(express.json());


app.use('/',(req,res)=>{
    res.send("Hello World From Transacode service");
})


// index.js


const kafkaconfig =  new KafkaConfig();

kafkaconfig.consume("transcode", (value)=>{
   console.log("got data from kafka : " , value);
})






app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`);
})