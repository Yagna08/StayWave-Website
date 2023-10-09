const express=require('express')
const morgan=require('morgan')
const dotenv=require("dotenv")
const connectDB =require('./Database/db')
const cors = require('cors')
const app=express()
//port

const port= process.env.PORT || 5000
//config dotenv
dotenv.config()
// MongoDb
connectDB()
app.use(cors(
    {
        origin: ['https://stay-wave-website.vercel.app/'],
    }
))
app.use(express.json())
app.use(morgan('dev'))
app.use((req, res) =>{
    res.header('Access-Control-Allow-Origin', 'https://stay-wave-website.vercel.app');
})
app.get('/', (req, res) => {
    res.send('Server is Running')
})

app.use('https://staywave-backend.onrender.com/api/user',require('./Routing/userrouting'))
//listening port

app.listen(port,()=>
{
    console.log(`Server running ${process.env.NODE_MODE} on ${process.env.PORT}`)
})