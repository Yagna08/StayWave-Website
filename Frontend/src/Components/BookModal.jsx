import React, { useEffect, useState } from "react";
import "../Styles/BookModal.css";
import { Button, Card, Container, Dropdown, Modal } from "react-bootstrap";
import { message } from 'antd';
import MultiCalendar from "./MultiCalendar";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

export default function BookModal(props) {
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);
  const [infants, setInfants] = useState(0);
  const [price, setPrice] = useState(props.hotel.pricing.rate.amount);
  const [totalDaysSelected, setTotalDaysSelected] = useState(null);
  const [dayPrice, setDayPrice] = useState(false);
  const [total, setTotal] = useState(0);
  const [value, setValue] = useState({
    checkIn: new Date(),
    checkOut: new Date(),
  });
  const [guest, setGuest] = useState(1);
  const personCap = props.hotel.guestControls.personCapacity;

  const handleTotalDaysUpdate = async (totalDays) => {
    console.log("selected:", totalDays);
    setTotalDaysSelected(totalDays);
    calculatePrice(totalDays);
  };
  const calculatePrice = (totalDays) => {
    const totalPrice = props.hotel.pricing.rate.amount * totalDays;
    setPrice(totalPrice);
    console.log(price);
  };
  const updatePrice = () => {
    setDayPrice(!dayPrice);
  };
  const flagCheck=()=>{
    if(localStorage.getItem('token') && total!=0)
    {
      return true
    }
    else{
      return false
    }
  }
  const subtractAdult = () => {
    if (adult > 1) {
      setAdult(adult - 1);
      setGuest(guest - 1);
    }
  };

  const addAdult = () => {
    if (guest < personCap) {
      setAdult(adult + 1);
      setGuest(guest + 1);
    }
  };

  const subtractChild = () => {
    if (child > 0) {
      setChild(child - 1);
      setGuest(guest - 1);
    }
  };

  const addChild = () => {
    if (guest < personCap) {
      setChild(child + 1);
      setGuest(guest + 1);
    }
  };

  const subtractInfants = () => {
    if (infants > 0) {
      setInfants(infants - 1);
    }
  };

  const addInfants = () => {
    if (infants < 5) {
      setInfants(infants + 1);
    }
  };
  // const cleaningFee = parseInt(props.hotel.priceDetails[0].value.split('$')[1])
  const cleaningFee = 0;
  const calculatetotal = () => {
    let temp = 0;
    console.log(price);
    temp += price;
    temp += cleaningFee * 70;
    setTotal(temp);
  };
  useEffect(() => {
    calculatetotal();
  }, [price]);
  const renderMenu = () => {
    return (
      <Dropdown.Menu>
        <Container className="d-flex criteriaFilter">
          <div className="criteriaDetail">
            <div className="fw-bold">Adults</div>
            <div className="mb-2">Age 13+</div>
          </div>
          <div className="criteriaChangeBtn">
            <Button
              className={adult === 1 ? "minusbtn disabled" : "minusbtn"}
              variant=""
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                subtractAdult();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18 12H6"
                />
              </svg>
            </Button>
            <span class="mt-2.5">{adult}</span>
            <Button
              className={guest >= personCap ? "plusbtn disabled" : "plusbtn"}
              variant=""
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addAdult();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
            </Button>
          </div>
        </Container>
        <Container className="d-flex criteriaFilter">
          <div className="criteriaDetail">
            <div className="fw-bold">Children</div>
            <div className="mb-2">Age 2-12</div>
          </div>
          <div className="criteriaChangeBtn">
            {console.log(props.hotel.guestControls.allowsChildren)}
            <Button
              className={
                child === 0 ||
                props.hotel.guestControls.allowsChildren === false
                  ? "minusbtn disabled"
                  : "minusbtn"
              }
              variant=""
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                subtractChild();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18 12H6"
                />
              </svg>
            </Button>
            <span class="mt-2.5">{child}</span>
            <Button
              className={
                guest >= personCap ||
                props.hotel.guestControls.allowsChildren === false
                  ? "plusbtn disabled"
                  : "plusbtn"
              }
              variant=""
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addChild();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
            </Button>
          </div>
        </Container>
        <Container className="d-flex criteriaFilter">
          <div className="criteriaDetail">
            <div className="fw-bold">Infants</div>
            <div className="mb-2">Under 2</div>
          </div>
          <div className="criteriaChangeBtn">
            <Button
              className={
                infants === 0 ||
                props.hotel.guestControls.allowsInfants === false
                  ? "minusbtn disabled"
                  : "minusbtn"
              }
              variant=""
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                subtractInfants();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18 12H6"
                />
              </svg>
            </Button>
            <span class="mt-2.5">{infants}</span>
            <Button
              className={
                infants === 5 ||
                props.hotel.guestControls.allowsInfants === false
                  ? "plusbtn disabled"
                  : "plusbtn"
              }
              variant=""
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addInfants();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
            </Button>
          </div>
        </Container>
        <Container>
          This place has a maximum of {personCap} guests, not including infants.
        </Container>
      </Dropdown.Menu>
    );
  };
  return (
    <>
      <Card className="bookcard float-end me-3">
        <Card.Body className="mb-2">
          <Container className="mt-2">
            <span className="h4">₹{props.hotel.pricing.rate.amount}</span>
            <span className="h6"> night</span>
            <span
              onClick={() => props.updateReview()}
              className="fw-bold float-end mt-2 d-flex"
            >
              <span>
                {props.hotel.reviewDetailsInterface.reviewCount > 3 && (
                  <span className="d-flex">
                    <AiFillStar className="mt-1 me-1 mb-1" />
                    <span>{props.hotel.stars}</span>&nbsp;·&nbsp;
                  </span>
                )}
              </span>
              <span className="underline text-decoration-underline text-secondary">
                {" "}
                {props.hotel.reviewDetailsInterface.reviewCount} Reviews
              </span>
            </span>
          </Container>
          <Container className="pt-4">
            <MultiCalendar
              value={props.value}
              change={props.change}
              updateTotalDays={handleTotalDaysUpdate}
              totalDaysSelected={totalDaysSelected}
            />
          </Container>
          <Container className="d-flex justify-content-center guests">
            <Dropdown className="guestdrop">
              <Dropdown.Toggle
                variant=""
                id="dropdown-basic"
                className="custom-toggle"
              >
                <div>
                  <span className="guest ms-2">Guests</span>
                </div>
                <div>
                  <span className="ms-2">
                    {adult} Adult
                    {child ? ` ,${child} Children` : ""}
                    {infants ? ` ,${infants} Infants` : ""}
                  </span>
                </div>
              </Dropdown.Toggle>
              {renderMenu()}
            </Dropdown>
          </Container>
          <Container className="mt-3">
            {flagCheck() ? (
              <Link
                to={`/book/${props.hotel.id}/${total}/${totalDaysSelected}/${props.hotel.pricing.rate.amount}`}
              >
                <Button className="reserveDate" variant="">
                  <span className="fw-bold">Reserve</span>
                </Button>
              </Link>
            ) : (
              <Button className="reserveDate" variant="" onClick={()=>message.warning('Login First or Select Days and Guest')}>
                <span className="fw-bold">Reserve</span>
              </Button>
            )}
          </Container>
          {totalDaysSelected > 0 && (
            <Container className="p-4">
              <div className="p-1">
                <span
                  onClick={() => updatePrice()}
                  className="text-decoration-underline"
                >
                  ₹{props.hotel.pricing.rate.amount} x {totalDaysSelected}{" "}
                  nights <span className="float-end">₹{price}</span>
                </span>
              </div>
              {/* <div className="p-1">
                            <span className="text-decoration-underline">
                                Cleaning Fee
                            </span>
                            <span className="float-end">₹{cleaningFee * 70}</span>
                        </div> */}
              <hr></hr>
              <div className="fw-bold">
                {() => calculatetotal()}
                Total before Taxes<span className="float-end">₹{total}</span>
              </div>
            </Container>
          )}
        </Card.Body>
      </Card>
    </>
  );
}
