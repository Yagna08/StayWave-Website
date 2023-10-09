const mongoose=require('mongoose')
require('dotenv').config();
const MONDB_URL = process.env.MONGODB_LINK

const connectDB = async()=>
{
    try{
        await mongoose.connect(MONDB_URL+"/Airbnb");
        console.log(`MongoDb server connected ${mongoose.connection.host}`)
    }
    catch(error){
        console.log(`MongoDb server not connected ${error}`)
    }
}
module.exports = connectDB