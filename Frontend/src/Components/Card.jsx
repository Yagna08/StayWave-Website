import React, { Fragment, useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import { Swiper, SwiperSlide, Navigation, Pagination } from 'swiper';
import { AiFillStar } from 'react-icons/ai'
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from "axios";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'
import "../Styles/Cards.css"
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainNavbar from "./MainNavbar";
import NoDataFound from "./NoDataFound";
// import DateModal from "./DateModal";




export default function Cards() {
  document.title = 'StayWave-WishList'
  const [hotels, setHotels] = useState([])
  const [length, setLength] = useState(0)
  const wishlist = async () => {
    try {
      const userid = localStorage.getItem("userid")
      let getdata = await axios.post('https://staywave-backend.onrender.com/api/user/getuserwishlistdata', { userid })
      console.log(getdata.data.getdatawishlist)
      setHotels(getdata.data.getdatawishlist)
      setLength(getdata.data.length)

      console.log('hii')
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    wishlist()
  }, [])

  return (
    <>
      <MainNavbar flagnav={false} />
      <hr />
      <Fragment>
        <div className="row hideover">
        <div className="d-flex justify-content-center">
          <h3>Wishlist</h3>
          </div>
          {hotels.length!=0?

            hotels.map((e, index) => {
            var thumblist = [];
            for (let i = 0; i < 5; i++) {
              thumblist.push(e.photos[i].thumbnailUrl);
            }

            return (

              <>
                <div className="col-sm-3">
                  <Fragment>
                    <Container className="swiper-container">
                      <Link
                        to={`/hotel/${e.id}`}
                        state={e}
                        style={{ textDecoration: "none", color: "black" }}
                      >

                        <Swiper
                          // install Swiper modules
                          className="swiper"
                          modules={[Navigation, Pagination, Scrollbar, A11y]}
                          spaceBetween={10}
                          slidesPerView={1}
                          navigation
                          pagination={{ clickable: true }}
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
                        <Container className="my-2 card-space">
                          <Container className="fw-bold card-data">
                            {e.city}
                            {","}
                            {e.state}
                            <span className="float-end fw-lighter d-flex">
                              {e.stars && <span>
                                <AiFillStar className="me-1 mt-1" />
                              </span>}
                              <span>{e.stars}</span>
                            </span>
                          </Container>
                          <Container className="card-data">
                            {e.roomType}
                          </Container>
                          <Container className="card-data">
                            Hosted by {e.primaryHost[0].smartName}
                          </Container>
                          <Container className="card-data">
                            <span className="fw-bold">
                              {e.pricing.rate.amountFormatted}
                            </span>{" "}
                            night
                          </Container>
                        </Container>
                      </Link>
                    </Container>
                  </Fragment>
                </div>
              </>
            );
          })
          :<NoDataFound/>}
        </div>
      </Fragment>
    </>
  )
}