const express= require('express')
const { loginControl, registerControl, homeControl,userControl,IndiControl, addwishlist, getwishlist, getUserWishListData, userBooking, detailBooking } = require('../Controllers/userController')
const homeAuth = require('../Middleware/homeAuth')


//router object
const router=express.Router()

//routes
router.post('/login',loginControl)
router.post('/register',registerControl)
router.post('/getUserData',homeAuth,homeControl)
router.post('/getData',userControl)
router.post('/trial',userControl);
router.post('/skips',userControl)
router.post('/single',IndiControl)
router.post('/addwishlist',addwishlist)
router.post('/getwishlist',getwishlist)
router.post('/getuserwishlistdata',getUserWishListData)
router.post('/detailbooking',detailBooking)
router.post('/userbooking',userBooking)
module.exports= router