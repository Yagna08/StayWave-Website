const express = require('express')
const morgan = require('morgan')
const dotenv = require("dotenv")
const connectDB = require('./Database/db')
const cors = require('cors')
const app = express()

const { testControl,
    loginControl,
    registerControl,
    homeControl,
    userControl,
    IndiControl,
    addwishlist,
    getwishlist,
    getUserWishListData,
    userBooking,
    detailBooking
} = require('./Controllers/userController');
const { homeAuth } = require('./Middleware/homeAuth');


//port
app.use(cors({
    origin: "https://staywave-website.vercel.app",
    credentials: true,
}));
const port = process.env.PORT || 5000
//config dotenv
dotenv.config()
// MongoDb
connectDB()

app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send("Hello")
});

app.post('/api/user/login', loginControl);
app.post('/api/user/register', registerControl);
app.post('/api/user/getUserData', homeAuth, homeControl);
app.post('/api/user/getData', userControl);
app.post('/api/user/trial', userControl);
app.post('/api/user/skips', userControl);
app.post('/api/user/single', IndiControl);
app.post('/api/user/addwishlist', addwishlist);
app.post('/api/user/getwishlist', getwishlist);
app.post('/api/user/getuserwishlistdata', getUserWishListData);
app.post('/api/user/detailbooking', detailBooking);
app.post('/api/user/userbooking', userBooking);
app.get('/api/user/test', testControl);

app.listen(port, () => {
    console.log(`Server running ${process.env.NODE_MODE} on ${process.env.PORT}`)
})