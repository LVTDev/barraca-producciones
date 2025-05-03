import mongoose from "mongoose"
const isConnected = false; // Track connection status
const connectionToDB = async () =>{
    if (isConnected) {
        return;
      }
    try {
       
        
        await mongoose.connect(process.env.NEXT_PUBLIC_MongoURL as string)
        console.log("connected to DB")
    } catch (error) {
        console.log(error)
    }
}

export default connectionToDB