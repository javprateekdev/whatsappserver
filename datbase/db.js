import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

const Connection=async ()=>{
    const URL= `mongodb://${USERNAME}:${PASSWORD}@ac-yc54mlb-shard-00-00.iadr3gw.mongodb.net:27017,ac-yc54mlb-shard-00-01.iadr3gw.mongodb.net:27017,ac-yc54mlb-shard-00-02.iadr3gw.mongodb.net:27017/?ssl=true&replicaSet=atlas-upvsvy-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
     await mongoose.connect(URL,{useUnifiedTopology:true});
     console.log("database connected successfuly")
    }catch(error){
        console.log('Error while connecting with the database ',error.message)
    }
}
export default Connection;