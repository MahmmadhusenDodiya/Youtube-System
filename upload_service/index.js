import express from "express"
import uploadRouter from "./routes/upload.route.js"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config();

const port=process.env.PORT || 8080 

const app=express();
app.use(cors({
    allowedHeaders:["*"],
    origin:"*"
}));
app.use(express.json());
app.use('/upload',uploadRouter);

app.use('/',(req,res)=>{
    res.send("Hello World");
})


app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`);
})