import React, { useEffect, useState, Fragment,useContext,createContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ImageLayout from "../Components/ImageLayout";
import { AiFillStar } from "react-icons/ai";
import ReviewModal from "../Components/ReviewModal";
import BookModal from "../Components/BookModal";
import { Col, Row, Container } from "react-bootstrap";
import Google from "../Components/Google";
import "../Styles/Main.css";
import Detail from "../Components/Detail";
import Footer from "../Components/Footer";
import MainNavbar from "../Components/MainNavbar";


const Context = createContext()
export const Single = (props) => {
  document.title='StayWave-Hotel'
  const par = useParams();
  const [data, setData] = useState({});
  const [mainData, setMainData] = useState([]);
  const [flag, setFlag] = useState(0);
  const [review, setReview] = useState(false);
  const [value, setValue] = useState({
    checkIn: new Date(),
    checkOut: new Date(),
  });

  const updateReview = () => {
    setReview(!review);
    // console.log(newValue)
  };

  const handleDateChange = (newValue) => {
    setValue(newValue);
  };
  const getUserData = async (values) => {
    try {
      const res = await axios.post(
        "https://staywave-backend.onrender.com/api/user/getUserData",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        },
        values
      );

      // const token=localStorage.getItem()
      //{} used here i.e empty object
      if (res.data.success) {
        console.log(res.data.data);
        // console.log(res.data.mainData)
        setData(res.data.data);
        // setMainData(res.data.mainData)
      }
    } catch (error) {
      // console.log("he")
      console.log(error);
    }
    // try {
    //   const res = await axios.post("/api/user/getData", values);
    //   if (res.data.success) {
    //     // console.log(res.data.data);
    //     // console.log(dot)
    //     console.log(res.data.mainData);
    //     // setData(res.data.data);
    //     setMainData(res.data.mainData);
    //     // setHotels(res.data.length);
    //     setFlag(1);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };
  const getSingleData = async () => {
    try {
      let param = par.id;
      console.log(param);
      const res = await axios.post("https://staywave-backend.onrender.com/api/user/single", { param });
      if (res.data.success) {
        // console.log(res.data.data);
        console.log(res.data.single);
        // setData(res.data.data);
        setMainData(res.data.single);
        setFlag(1);
        //   setSearchData(res.data.mainData)
      }
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(par.id)
  var img = [];
  var imglist = [];
  //   console.log('hello')
  useEffect(() => {
    getUserData();
    getSingleData();
  }, []);
  if (flag === 1) {
    const hotel = mainData;
    // console.log(searchData)
    // console.log("abc")
    // console.log(par.id)
    // for (let i = 0; i < searchData.length; i++) {
    // console.log(par.id)
    // if (par.id === searchData.id) {
    // var hotel = searchData;
    console.log(hotel);
    // console.log(searchData.id);
    console.log(par.id);
    

    const logout = () => {
      localStorage.clear();
      setData({});
      // navigate('/login')
    };

    return (
      <>
      <Context.Provider value={mainData}>
        <MainNavbar flagnav={false}/>
        <hr class="m"/>
        <Container>
          <h4 className="fw-bold ms-3">{hotel.name}</h4>
          <span className="d-flex ms-3">
            {hotel.reviewDetailsInterface.reviewCount > 3 && (
              <span className="d-flex">
                <AiFillStar className="me-2 mt-1 mb-1" />
                <div className="fw-bold">{hotel.stars}</div> &nbsp;·{" "}
              </span>
            )}
            <span onClick={() => updateReview()} className="underline fw-bold">
              &nbsp;
              {hotel.reviewDetailsInterface.reviewCount} Reviews
            </span>
          </span>
          <ReviewModal
            review={review}
            updateReview={updateReview}
            hotel={hotel}
          />
        </Container>
        <Container>
          <ImageLayout hotel={hotel} />
        </Container>
        <Container className="mt-3">
          <Row>
            <Col className="col-8">
              <Detail hotel={hotel} />
            </Col>
            <Col className="col-4 fixPos">
              <div className="book-model">
                <BookModal
                  hotel={hotel}
                  value={value}
                  change={handleDateChange}
                  updateReview={updateReview}
                  // updateTotalDays={handleTotalDaysUpdate} // Make sure to pass the prop with the correct name and as a function
                />
              </div>
            </Col>
          </Row>
          <Container>
            <Google lat={hotel.location.lat} lng={hotel.location.lng} />
          </Container>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </Container>
        <Footer />
      </Context.Provider></>
    );
  }
};
export {Context};