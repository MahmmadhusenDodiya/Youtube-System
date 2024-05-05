
import {Kafka} from "kafkajs"
import fs from "fs"
import path from "path"

class KafkaConfig {
   constructor(){
    
    console.log("Inside Kafka Config Transcoder Service---------------------");
    console.log(path.resolve("./ca.pem"));
       this.kafka = new Kafka({
           clientId: "youtube uploader",
           brokers: [process.env.KAFKAURI],
           ssl: {
               ca: [fs.readFileSync(path.resolve("./ca.pem"), "utf-8")]
           },
           sasl: {
               username: process.env.KAFKAUSERNAME,
               password: process.env.KAFKAPASSWORD,
               mechanism: "plain"
           }
       })
       this.producer = this.kafka.producer();
       this.consumer = this.kafka.consumer({groupId: "youtube-uploader"});
   }

   async produce(topic, messages){
       try {
           const result = await this.producer.connect();
           console.log("kafka Producer connected... : ", result);
           await this.producer.send({
               topic: topic,
               messages: messages
           });     
       } catch (error) {
           console.log(error);
       }finally{
           await this.producer.disconnect();
       }  }

   async consume(topic , callback){
       try {
        console.log("going to consume message-----------------");
           let result=await this.consumer.connect();
           console.log("---------------kafka Consumer connected... : ", result);
           await this.consumer.subscribe({topic: topic, fromBeginning: true});
           await this.consumer.run({
               eachMessage: async({
                   topic, partition,message
               }) =>{
                   const value = message.value.toString();
                   callback(value);
               }
           });
       } catch (error) {
           console.log("Error Occure in Consumer : "+error);
       }
   }
}
export default KafkaConfig;