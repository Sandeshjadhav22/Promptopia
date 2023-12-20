import mongoose from "mongoose";


let isConnected = false;

export const connectToDB = async() => {
    mongoose.set('strictQuery',true);

    if(isConnected){
        console.log("Mongoo Db is already connect");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            db_name: "share_prompt",
            useNewUrlParse: true,
            useUnifiedTopology:true
        })
        isConnected = true;
        console.log("MOngo IS connected")
    } catch (error) {
        console.log(error);
    }
}