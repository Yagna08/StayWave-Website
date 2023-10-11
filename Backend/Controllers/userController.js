const userModel = require("../Models/usermodel");
const Data = require("../Models/groupmodel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const destination = require("../cities.json")
let types = "farms";

const loginControl = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    const userid = user._id
    console.log(userid)

    if (!user) {
      return res
        .status(200)
        .send({ message: "User Not Found", success: false });
    }

    const matchPass = await bcrypt.compare(req.body.password, user.password);
    console.log(req.body.password)

    if (!matchPass) {
      return res
        .status(200)
        .send({ message: "Invalid User or Password", success: false });
    }
    const token = jwt.sign({ id: user._id }, process.env.KEY_SECRET, {
      expiresIn: "1d",
    });
    return res
      .status(200)
      .send({ message: "Login Success", success: true, token, userid });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: `${error.message}`, success: false });
  }
};
const registerControl = async (req, res) => {


  try {
    const existingUser = await userModel.findOne({ email: req.body.email });
    if (existingUser) {
      return res
        .status(200)
        .send({ message: `User Already Exist`, success: false });
    }
    const password = req.body.password;

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    req.body.password = hashPassword;
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).send({ message: "Register Success", success: true });
  }
  catch (error) {
    console.log(error);
    res.status(500).send({ message: `${error.message}`, success: false });
  }
};

const homeControl = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.body.userId });
    if (!user) {
      return res
        .status(200)
        .send({ message: `User not found`, success: false });
    } else {
      res.status(200).json({
        message: "Register Success",
        success: true,
        data: {
          name: user.name,
          email: user.email,
        },
        // ahmd: ahmd
      });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ message: `Authorization Error`, success: false, error });
  }
};
let hotels = [];

const testControl = async (req, res) => {
  try {
    const data = await Data.find().limit(5);
    console.log(data);
    res.status(200).json(data);
  }
  catch (error) {
    console.log(error);
    res.status(404).json({ error: error.message });
  }
};

const userControl = async (req, res) => {
  try {
    const { type, skip, min, max, beds, bedrooms, bathrooms, amenities, searchMap, searchDestination, checkIn, checkOut, adults, childrens, infants } =
      req.body;
    types = type ? type : "farms";
    // console.log(skip);
    console.log(min, max);
    console.log(bathrooms);
    console.log(beds);
    console.log(bedrooms);
    console.log(amenities);
    // console.log(searchMap)
    // console.log(searchDestination)
    // console.log(checkIn)
    // console.log(checkOut)
    // console.log(adults)
    // console.log(childrens)
    // console.log(infants)
    let searchDict = {
      'northIndia': ['Jammu and Kashmir', 'Himachal Pradesh', 'Punjab', 'Chandigarh', 'Ladakh', 'Uttarakhand', 'Haryana', 'Delhi'],
      'southIndia': ['Andaman and Nicobar Islands', 'Andhra Pradesh', 'Telangana', 'Karnataka', 'Kerala', 'Tamil Nadu'],
      'westIndia': ['Daman and Diu', 'Gujarat', 'Maharashtra', 'Rajasthan'],
      'centralIndia': ['Chhattisgarh', 'Madhya Pradesh', 'Uttar Pradesh'],
      'eastIndia': ['Arunachal Pradesh', 'Assam', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Sikkim', 'Tripura', 'West Bengal']
    };
    // console.log(searchDict[searchMap])
    let TotalGuest = parseInt(adults + childrens)
    // console.log(TotalGuest)
    let mainData = await Data.find({
      $and: [
        { type: types },
        { "pricing.rate.amount": { $gt: min, $lt: max } },
        { bathroomLabel: bathrooms == 0 ? { $gt: 0, $lt: 9 } : bathrooms },
        { bedLabel: beds == 0 ? { $gt: 0, $lt: 9 } : beds },
        // {bedLabel:{$in:beds}}
        { bedroomLabel: bedrooms == 0 ? { $gt: 0, $lt: 9 } : bedrooms },
        {
          listingAmenities: {
            $elemMatch: {
              name: { $in: amenities },
              isPresent: true,
            },
          },
        },
        { numberOfGuests: (TotalGuest === 0) ? { $gt: 0, $lt: 20 } : TotalGuest },
        { "guestControls.allowsInfants": infants == 0 ? { $in: [true, false] } : true },
        { "guestControls.allowsChildren": childrens == 0 ? { $in: [true, false] } : true }
      ],
      $or: [
        { state: ((searchMap == '' || searchMap == 'indiaMap') && searchDestination == '') ? destination : (searchDestination != '') ? searchDestination : { $in: searchDict[searchMap] } },
        { state: (searchDestination == '' && searchMap == '') ? destination : (searchDestination == '') ? { $in: searchDict[searchMap] } : { $regex: new RegExp(searchDestination), $options: 'i' } },
        { city: (searchDestination == '' && searchMap == '') ? destination : (searchDestination == '') ? { $in: searchDict[searchMap] } : { $regex: new RegExp(searchDestination), $options: 'i' } },
        { name: (searchDestination == '' && searchMap == '') ? destination : (searchDestination == '') ? { $in: searchDict[searchMap] } : { $regex: new RegExp(searchDestination), $options: 'i' } },
      ]
    }).limit(20).skip(skip);
    let length = await Data.find({
      $and: [
        { type: types },
        { "pricing.rate.amount": { $gt: min, $lt: max } },
        // {bedLabel:{$in:beds}}
        { bathroomLabel: bathrooms == 0 ? { $gt: 0, $lt: 9 } : bathrooms },
        { bedLabel: beds == 0 ? { $gt: 0, $lt: 9 } : beds },
        { bedroomLabel: bedrooms == 0 ? { $gt: 0, $lt: 9 } : bedrooms },
        {
          listingAmenities: {
            $elemMatch: {
              name: { $in: amenities },
              isPresent: true,
            },
          },
        },
        { numberOfGuests: TotalGuest === 0 ? { $gt: 0, $lt: 20 } : TotalGuest },
        { "guestControls.allowsInfants": infants == 0 ? { $in: [true, false] } : true },
        { "guestControls.allowsChildren": childrens == 0 ? { $in: [true, false] } : true }
      ],

      $or: [
        { state: ((searchMap == '' || searchMap == 'indiaMap') && searchDestination == '') ? destination : (searchDestination != '') ? searchDestination : { $in: searchDict[searchMap] } },
        { state: (searchDestination == '' && searchMap == '') ? destination : (searchDestination == '') ? { $in: searchDict[searchMap] } : { $regex: new RegExp(searchDestination), $options: 'i' } },
        { city: (searchDestination == '' && searchMap == '') ? destination : (searchDestination == '') ? { $in: searchDict[searchMap] } : { $regex: new RegExp(searchDestination), $options: 'i' } },
        { name: (searchDestination == '' && searchMap == '') ? destination : (searchDestination == '') ? { $in: searchDict[searchMap] } : { $regex: new RegExp(searchDestination), $options: 'i' } },
      ]
    }).count();



    res.status(200).json({
      message: "Register Success",
      success: true,
      mainData: mainData,
      length: length,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ message: `Authorization Error`, success: false, error });
  }
};

const IndiControl = async (req, res) => {
  const { param } = req.body;
  let params = param;
  let single = await Data.findOne({ id: params });
  // console.log(single)
  res.status(200).json({
    message: "Register Success",
    success: true,
    single: single,
  });
};
const addwishlist = async (req, res) => {
  try {
    // const addlist=[]
    let flag = false
    const { addid, userid } = await req.body;
    console.log(addid);
    console.log(userid);
    const userwishlist = await userModel.find({ _id: userid })
    console.log(userwishlist)
    // if (userwishlist !== null) {
    //   console.log('yeah boy')
    //   if (userwishlist.wishlist === addid) {
    // const movieid = userwishlist.wishlist;
    // console.log('hey Baby')
    // const removeMovie = await userModel.deleteOne({ id: movieid });
    // console.log(removeMovie);

    // res.status(201).json({ removedmovie: "Movie removed successfully" });
    // } else {
    let addlist = userwishlist[0].wishlist
    console.log(userwishlist[0].wishlist)
    for (var i of addlist) {
      if (i === addid) {
        flag = true
        console.log('true')
      }
    }
    if (flag) {
      const newadd = await userModel.findOneAndUpdate(
        { _id: userid },
        { $pull: { wishlist: addid } }, { new: true }
      )
      console.log(newadd.wishlist)
      wishlistdata = newadd.wishlist
      res
        .status(200)
        .json({ message: "Movie added successfully.", wishlistdata });
    }
    else {
      console.log(addid)
      const newadd = await userModel.findOneAndUpdate({ _id: userid }, {
        $push: {
          wishlist: addid
        }
      }, { new: true })
      console.log(newadd.wishlist)
      wishlistdata = newadd.wishlist
      res
        .status(200)
        .json({ message: "Movie added successfully.", wishlistdata });
    }


  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "An error occurred in adding movie" });
  }
}
const getwishlist = async (req, res) => {
  try {
    const { userid } = req.body;
    console.log(userid)
    if (userid) {
      const wishlist = await userModel.find({ _id: userid }, { wishlist: 1, _id: 0 })
      // console.log(wishlist[0].wishlist);
      const wish = wishlist[0].wishlist
      // console.log(wish)
      // console.log('hi')
      if (wish.length === 0) {
        console.log("no initial data");
        res.json({ wish: [] });
      } else {

        res.json({
          message: "got data successfully",
          wish: wish,
        });
      }
    }
    else {
      res.status(200).json({ wish: [] })
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred." });
  }
}

const getUserWishListData = async (req, res) => {
  try {
    const { userid } = req.body
    const getuserwishlistdata = await userModel.find({ _id: userid })
    console.log(getuserwishlistdata[0].wishlist)
    const allwishlist = getuserwishlistdata[0].wishlist
    const getdatawishlist = await Data.find({ id: { $in: allwishlist } })
    const length = await Data.find({ id: { $in: allwishlist } }).count()
    console.log(getdatawishlist)
    res.status(200).json({
      message: "Register Success",
      success: true,
      getdatawishlist: getdatawishlist,
      length: length
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ message: `Authorization Error`, success: false, error });
  }
}
const detailBooking = async (req, res) => {
  const { hotelid } = req.body;
  let params = hotelid;
  console.log(hotelid)
  let single = await Data.findOne({ id: hotelid });
  // console.log(single)
  res.status(200).json({
    message: "Register Success",
    success: true,
    single: single,
  });
}
const userBooking = async () => {

}
module.exports = {
  testControl,
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
};
