import React, { useEffect, useState, Fragment } from "react";
import cities from "../cities.json";
import { Link, useNavigate } from "react-router-dom";
import { message } from 'antd';
import "../Styles/Cards.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import InfiniteScroll from "react-infinite-scroll-component";
import { AiFillStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import MainNavbar from "../Components/MainNavbar";
import TabsSlider from "../Components/TabsSlider";
import { Container, Button } from "react-bootstrap";
import Footer from "../Components/Footer";
import axios from "axios";
import Spinner from "../Components/Spinner";
import TabsFilterModal from "../Components/TabsFilterModal";
import NoDataFound from '../Components/NoDataFound'
let parameter = {
  type: "",
  skip: 0,
  min: 0,
  max: 50000,
  beds: 0,
  bedrooms: 0,
  bathrooms: 0,
  amenities: [
    "Mountain views",
    "Air conditioning",
    "Wifi",
    "Patio or balcony",
    "TV",
    "Dedicated workspace",
    "Smoke alarm",
    "Pets allowed",
    "Pool",
    "Beachfront",
  ],
  searchMap: "indiaMap",
  searchDestination: cities,
  checkIn: "",
  checkOut: "",
  infants: 0,
  childrens: 0,
  adults: 0,
};

const Home = () => {
  document.title = 'StayWave'
  const [data, setData] = useState({});
  const [wishlist, setWishlist] = useState([]);
  const [mainData, setMainData] = useState([]);
  const [value, setValue] = useState("beach");
  const [hotels, setHotels] = useState([]);
  const [dot, setDot] = useState("hello");
  const [warning, setWarning] = useState(false);
  var hotel = mainData.filter((e) => e.photos.length >= 5);


  const getInitialWishlist = async () => {
    try {
      const userid = localStorage.getItem("userid")
      let getwishlist = await axios.post('https://staywave-backend.onrender.com/api/user/getwishlist', { userid })
      console.log(getwishlist.data.wish)
      setWishlist(getwishlist.data.wish)
      console.log('hii')
    } catch (error) {
      console.log(error)
    }
  }
  const warningmsg = () => {
    message.warning('Please Login First')
  }
  const wishlists = async (id) => {
    try {
      const addid = id;
      const userid = localStorage.getItem("userid");
      if (!userid) {
        warningmsg()
      }
      console.log(addid);
      console.log(userid);
      let res = await axios.post("https://staywave-backend.onrender.com/api/user/addwishlist", { userid, addid });
      console.log(res.data.wishlistdata);
      setWishlist(res.data.wishlistdata)
    } catch (err) {
      console.log(err);
    }
    getInitialWishlist()
  };
  const type = async (type) => {
    try {
      parameter["type"] = type;
      parameter["skip"] = 0;
      console.log(type);
      let res = await axios.post("https://staywave-backend.onrender.com/api/user/trial", parameter);
      if (res.data.success) {
        console.log(res.data.mainData);
        setMainData(res.data.mainData);
        setHotels(res.data.length);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };
  const navbarSearch = async (
    searchedmap,
    searchedvalue,
    startDate,
    endDate,
    infants,
    children,
    adultsQuantity
  ) => {
    try {
      parameter["searchMap"] = searchedmap;
      parameter["searchDestination"] = searchedvalue;
      parameter["checkIn"] = startDate;
      parameter["checkOut"] = endDate;
      parameter["skip"] = 0;
      parameter["adults"] = adultsQuantity;
      parameter["childrens"] = children;
      parameter["infants"] = infants;
      console.log(searchedmap);
      console.log(searchedvalue);
      console.log(startDate);
      console.log(endDate);
      console.log(infants);
      console.log(children);
      console.log(adultsQuantity);
      console.log(parameter);
      let res = await axios.post("https://staywave-backend.onrender.com/api/user/trial", parameter);
      if (res.data.success) {
        console.log(res.data.mainData);
        setMainData(res.data.mainData);
        setHotels(res.data.length);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  const filter = async (min, max, beds, bedrooms, bathrooms, amenities) => {
    try {
      parameter["min"] = min;
      parameter["max"] = max;
      parameter["beds"] = parseInt(beds);
      parameter["skip"] = 0;
      parameter["bedrooms"] = parseInt(bedrooms);
      parameter["bathrooms"] = parseInt(bathrooms);
      if (amenities.length != 0) {
        parameter["amenities"] = amenities;
      } else {
        parameter["amenities"] = [
          "Mountain views",
          "Air conditioning",
          "Wifi",
          "Patio or balcony",
          "TV",
          "Dedicated workspace",
          "Smoke alarm",
          "Pets allowed",
          "Pool",
          "Beachfront",
        ];
      }
      console.log(parameter);
      let res = await axios.post("https://staywave-backend.onrender.com/api/user/trial", parameter);
      // result=await result.json()
      if (res.data.success) {
        // console.log(res.data.data);
        // console.log(dot)
        console.log(res.data.mainData);
        // setData(res.data.data);
        setMainData(res.data.mainData);
        setHotels(res.data.length);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };
  const skips = async () => {
    try {
      console.log("skip");
      console.log(hotels);
      // parameter['type']=type
      parameter["skip"] += 20;
      if (parameter["skip"] >= hotels) {
        parameter["skip"] = hotels;
      }
      let res = await axios.post("https://staywave-backend.onrender.com/api/user/skips", parameter);
      // result=await result.json()
      if (res.data.success) {
        // console.log(res.data.data);
        // console.log(dot)
        console.log(res.data.mainData);
        // hotel=mainData.concat(res.data.mainData)
        // setData(res.data.data);
        setMainData(mainData.concat(res.data.mainData));
        // setHotels(res.data.length);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  //login user data will be get
  const getUserData = async (values, parameter) => {
    parameter = {
      type: "",
      skip: 0,
      min: 0,
      max: 50000,
      beds: 0,
      bedrooms: 0,
      bathrooms: 0,
      amenities: [
        "Mountain views",
        "Air conditioning",
        "Wifi",
        "Patio or balcony",
        "TV",
        "Dedicated workspace",
        "Smoke alarm",
        "Pets allowed",
        "Pool",
        "Beachfront",
      ],
      searchMap: "indiaMap",
      searchDestination: cities,
      checkIn: "",
      checkOut: "",
      infants: 0,
      childrens: 0,
      adults: 0,
    };
    try {
      const res = await axios.post(
        "https://staywave-backend.onrender.com/api/user/getUserData",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      if (res.data.success) {
        console.log(res.data.data);
        // console.log(res.data.mainData)
        setData(res.data.data);
        // setMainData(res.data.mainData);
      }
    } catch (error) {
      console.log(error);
    }
    console.log(parameter);
    try {
      const res = await axios.post("https://staywave-backend.onrender.com/api/user/getData", parameter);
      if (res.data.success) {
        // console.log(res.data.data);
        // console.log(dot)
        console.log(res.data.mainData);
        // setData(res.data.data);
        setMainData(res.data.mainData);
        setHotels(res.data.length);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
    getInitialWishlist()
  }, []);
  // const logout = () => {
  //   localStorage.clear();
  //   setData({});
  // };

  return (
    <>
      <MainNavbar search={navbarSearch} getinitialwish={getInitialWishlist} flagnav={true} />
      <hr />
      <div id="tabsSlider">
        <TabsSlider type={type} />
        <TabsFilterModal filter={filter} />
      </div>
      <br />
      <div className="any">
        {console.log(hotel.length)}
        {console.log("before")}
        {console.log(parameter["skip"])}
        {console.log(hotels !== hotel.length)}

        <InfiniteScroll
          dataLength={hotel.length}
          hasMore={hotels !== hotel.length}
          next={() => {
            skips();
          }}
          loader={<Spinner />}
        >
          {console.log(hotels !== hotel.length)}
          {console.log("after")}
          {console.log(parameter["skip"])}
          {console.log(hotels)}

          {hotels ?
            <div className="row" >
              {/* {console.log(hotel.length)} */}
              {hotel.map((e, index) => {
                var thumblist = [];
                for (let i = 0; i < 5; i++) {
                  thumblist.push(e.photos[i].thumbnailUrl);
                }

                return (
                  <>
                    <div className="col-md-4 col-lg-3 col-sm-6 col-xs-12" >
                      <Fragment>
                        <Container className="swiper-container" >
                          <Link
                            to={`/hotel/${e.id}`}
                            state={e}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <div>
                              <Link to='/'>
                                {warning && warningmsg()}
                                {wishlist.includes(e.id) ?
                                  <button onClick={() => wishlists(e.id)}>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      fill="#E00B41"
                                      class="w-6 h-6 heart"
                                    >
                                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                    </svg>
                                  </button>
                                  :
                                  <button onClick={() => wishlists(e.id)}>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="rgba(117, 108, 108, 0.155)"
                                      viewBox="0 0 24 24"
                                      strokeWidth={2}
                                      stroke="white"
                                      className="w-6 h-6 heart"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                      />
                                    </svg>
                                  </button>}

                              </Link>
                              <Swiper
                                // install Swiper modules
                                className="swiper"
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={10}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                breakpoints={{
                                  640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                  },
                                  768: {
                                    slidesPerView: 1,
                                    spaceBetween: 40,
                                  },
                                  1024: {
                                    slidesPerView: 1,
                                    spaceBetween: 50,
                                  },
                                }}
                                // scrollbar={{ draggable: true }}
                                // onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log("slide change")}
                              >
                                <SwiperSlide>
                                  <img src={thumblist[0]} alt="none" />
                                </SwiperSlide>
                                <SwiperSlide>
                                  <img src={thumblist[1]} alt="none" />
                                </SwiperSlide>
                                <SwiperSlide>
                                  <img src={thumblist[2]} alt="none" />
                                </SwiperSlide>
                                <SwiperSlide>
                                  <img src={thumblist[3]} alt="none" />
                                </SwiperSlide>
                                <SwiperSlide>
                                  <img src={thumblist[4]} alt="none" />
                                </SwiperSlide>
                              </Swiper>
                            </div>



                            {/* <section class="section slider-section">
                              <div class="container slider-column">
                                <div class="swiper swiper-slider">
                                  <div class="swiper-wrapper">
                                    <img class="swiper-slide" src="https://source.unsplash.com/1920x1280/?animal" alt="Swiper" />
                                    <img class="swiper-slide" src="https://source.unsplash.com/1920x1280/?nature" alt="Swiper" />
                                    <img class="swiper-slide" src="https://source.unsplash.com/1920x1280/?people" alt="Swiper" />
                                    <img class="swiper-slide" src="https://source.unsplash.com/1920x1280/?flower" alt="Swiper" />
                                    <img class="swiper-slide" src="https://source.unsplash.com/1920x1280/?travel" alt="Swiper" />
                                    <img class="swiper-slide" src="https://source.unsplash.com/1920x1280/?fruits" alt="Swiper" />
                                  </div>
                                  <span class="swiper-pagination"></span>
                                  <span class="swiper-button-prev"></span>
                                  <span class="swiper-button-next"></span>
                                </div>
                              </div>
                            </section> */}


                            <Container className="my-2 card-space">
                              <div className="fw-bold card-data">
                                <span className="d-flex">
                                  {e.city}
                                  {","}
                                  {e.state}
                                </span>
                                <span className="fw-lighter d-flex reviews">
                                  {e.stars && <span className="d-flex">
                                    <AiFillStar className="mt-1" />
                                    {e.stars}
                                  </span>}
                                </span>
                              </div>
                              <div className="card-data">
                                {e.roomType}
                              </div>
                              <div className="card-data">
                                Hosted by {e.primaryHost[0].smartName}
                              </div>
                              <div className="card-data">
                                <span className="fw-bold">
                                  {e.pricing.rate.amountFormatted}{" "}night
                                </span>
                                
                              </div>
                            </Container>
                          </Link>
                        </Container>
                      </Fragment>
                    </div>
                  </>
                );
              })}
            </div>
            :
            <NoDataFound />
          }
        </InfiniteScroll>
      </div>
      <Footer />
    </>
  );
};

export default Home;
