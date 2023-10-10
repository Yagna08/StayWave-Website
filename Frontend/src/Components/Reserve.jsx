

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
// import Data from "../DataEx.json"
import { Container, Card, Button } from "react-bootstrap";
import "../Styles/Reserve.css";
const Reserve = () => {
  document.title='StayWave-Booking'
  const [rental, setrental] = useState({});
  const [flag,setFlag]=useState(0)
  const param = useParams();
  let start={}
  const totalprice=param.total
  console.log(totalprice)
  const totaldays=param.days
  const reservegetid = async () => {
    console.log("hio");
    try {
      const hotelid = param.id;
      const data = await axios.post("https://stay-wave-website-backend.vercel.app/api/user/detailbooking", { hotelid });
      console.log(data.data.single);
      setrental(data.data.single);
      setFlag(1);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    reservegetid();
  }, []);
    console.log(rental)
  if (flag===1) {
    start = rental
    console.log(start)
    return (
      <div>
        <Container>
          <Card id="reserve">
            <Card.Body className="m-2">
              <div className="row">
                <div className="col-4">
                  <img
                    src={start.photos[0].thumbnailUrl}
                    alt=""
                    height={120}
                    width={145}
                    className="object-fit-fill rounded"
                  />
                </div>
                <div className="col-8">
                  <div>
                    <div className="room-type">{start.roomType}</div>
                    <div className="room-name">{start.name}</div>
                  </div>
                </div>
              </div>
              <hr />
              <div>
                <h4>Price Details</h4>
                <div className="my-2">
                  <span>
                    ₹{param.price} x {totaldays} nights{" "}
                    <span className="float-end">₹{totalprice}</span>
                  </span>
                </div>
                <div className="my-2">
                  <span>Cleaning Fee</span>
                  <span className="float-end">₹{1000}</span>
                </div>
                <hr />
                <div className="fw-bold my-2">
                  Total before Taxes (INR)
                  <span className="float-end">₹{totalprice}</span>
                </div>
              </div>
              <Button variant="" className="mt-4 mb-3 reservebtn">
                <span className="fw-bold text-light">Reserve</span>
              </Button>
            </Card.Body>
          </Card>
        </Container>
        <Footer />
      </div>
    );
  }
};

export default Reserve;
