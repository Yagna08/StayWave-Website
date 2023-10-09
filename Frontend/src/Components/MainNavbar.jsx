import { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { counterActions } from "../Redux/State";
import Select from "react-select";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Modal,
  Form,
  Button,
} from "react-bootstrap";
import { IoLocationOutline } from "react-icons/io5";
import { Link, redirect } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { LuSearch } from "react-icons/lu";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../Images/Logo.png";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import FormItem from "antd/es/form/FormItem";
import Calendar from "./Calendar";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import Card from "./Card";
import indiaMap from "../Images/Map_India.png";
import northIndia from "../Images/North_India.png";
import westIndia from "../Images/West_India.png";
import southIndia from "../Images/South_India.png";
import centralIndia from "../Images/Central_India.png";
import eastIndia from "../Images/Eastern_India.png";
import "../Styles/MainNavbar.css";
import MultiCalendar from "./MultiCalendar";

export default function MainNavbar(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalId, setModalId] = useState(0);
  const [searchDesti, setSearchDesti] = useState(false);
  const [modalFilterButton, setModalFilterButton] = useState(0);
  const [inputValue, setInputeValue] = useState("");
  const [flagnav, setFlagNav] = useState(true);
  let [children, setChildren] = useState(0);
  let [infants, setInfants] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const adultsQuantity = useSelector((state) => state.counter.value);

  const dispacth = useDispatch();
  const [linkClickedVlaue, setLinkClickedValue] = useState("");
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [checkOutOpen, setCheckOutOpen] = useState(false);
  const [searchedValue, setSearchedValue] = useState("");
  const [searchedMap, setSearchedMap] = useState("");

  const handleStartDateChange = (date) => {
    setStartDate(date);
    setCheckOutOpen(true); // Open the Check-out calendar
  };
  const handleSearch = (event) => {
    console.log(event.target.value);
    setSearchedValue(event.target.value);
    setSearchedMap("");
  };

  const handleSearchEnter = (event) => {
    console.log("event.key is ", event.key);
    if (event.key == "Alt") {
      console.log("in enter");
      handleSubmit();
    }
  };
  const handleSubmit = () => {
    // openNavModal(0);
    console.log(searchDesti);
    props.search(
      searchedMap,
      searchedValue,
      startDate,
      endDate,
      infants,
      children,
      adultsQuantity
    );
  };
  const handleMap = (map) => {
    setSearchedMap(map);
    setSearchedValue("");
    console.log(map);
  };
  const handleEndDateChange = (date) => {
    setEndDate(date);
    setCheckOutOpen(false);
  };

  const openNavModal = (id) => {
    setModalOpen(!modalOpen);
    setModalFilterButton(id);
  };
  // const handleDestiKeyDown = (event) => {
  //   event.key === 'Enter' ? setSearchDesti(true) : setSearchDesti(false)
  //   // console.log(event.target.value)

  //   // console.log(event)
  // }
  const handleModalFilterBtnClick = (id) => {
    setModalFilterButton(id);
    // id ===2 && handleDateChange()
  };

  const increaeHandler = () => {
    dispacth(counterActions.increaseCount());
  };

  const decreaseHandler = () => {
    dispacth(counterActions.decrementCount());
  };

  const inputValueHandler = (e) => {
    setInputeValue(e.target.value);
  };

  const options = [
    { value: "yes", label: "yes" },
    { value: "no", label: "no" },
  ];

  const childrenAdd = () => {
    setChildren(children + 1);
  };

  const childrenLess = () => {
    if (children <= 0) {
      return;
    } else {
      setChildren(children - 1);
    }
  };

  const infantsAdd = () => {
    setInfants(infants + 1);
  };

  const infantsLess = () => {
    if (infants <= 0) {
      return;
    } else {
      setInfants(infants - 1);
    }
  };
  const logout = () => {
    localStorage.clear();
    props.getinitialwish();
    // window.location.reload()
  };

  const toggleLogin = () => {
    setOpenLogin(!openLogin);
    setOpenSignup(false);
    setModalOpen(false);
  };

  const toggleSignup = () => {
    setOpenSignup(!openSignup);
    setOpenLogin(false);
    setModalOpen(false);
  };
  const flagprops = () => {
    props.getinitialwish();
  };
  // useEffect(() => {
  //   logout()
  // }, [])

  return (
    <Fragment>
      {console.log(localStorage.getItem("token"))}
      <div class='mt-3'>
        <Navbar expand="lg" className="bg-body-tertiary" id="mainNav">
          <Container fluid>

            <Navbar.Brand href="/" id="main-brand">
              <img src={logo} alt="nav logo" />
            </Navbar.Brand>
            {props.flagnav &&
            <>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <div className="navSearchButton">
              <button className="btn" onClick={() => openNavModal(1)}>
                Anywhere
              </button>
              <button className="btn" onClick={() => openNavModal(2)}>
                Any week
              </button>
              <button className="btn" onClick={() => openNavModal(4)}>
                Add guests
              </button>
              <button
                className="btn btn-danger"
                onClick={() => openNavModal(0)}
              >
                <LuSearch />
              </button>
            </div>
            </>
            }
            <div className="navTopRight me-2" class="border-none">
              <Nav class="border-none">
                <NavDropdown
                  eventKey={1}
                  class="border-none"
                  title={
                    <div className="navDropDownButton">
                      <AiOutlineMenu /> 
                      &nbsp;&nbsp;
                      <BsPersonFill />
                    </div>
                  }
                  id="basic-nav-dropdown"
                  drop={"start"}
                >
                  {!localStorage.getItem("token") && (
                    <>
                      <NavDropdown.Item eventKey={1.1}>
                        <button
                          onClick={() => toggleSignup()}
                          className={"logoutShow"}
                        >
                          Sign up
                        </button>
                      </NavDropdown.Item>
                      <NavDropdown.Item eventKey={1.2}>
                        <button
                          onClick={() => toggleLogin()}
                          className={"logoutShow"}
                        >
                          Log in
                        </button>
                      </NavDropdown.Item>
                    </>
                  )}
                  {localStorage.getItem("token") && (
                    <>
                      <NavDropdown.Item eventKey={1.3}>
                        Help Center
                      </NavDropdown.Item>
                      <NavDropdown.Item eventKey={1.4}>
                        <button className={"logoutShow"} onClick={logout}>
                          Logout
                        </button>
                      </NavDropdown.Item>

                      <NavDropdown.Item eventKey={1.5}>
                        <Link to="/wishlist">
                          <button className={"logoutShow"}>Wishlist</button>
                        </Link>
                      </NavDropdown.Item>
                    </>
                  )}
                </NavDropdown>
              </Nav>
            </div>
          </Container>
        </Navbar>
        <Modal
          show={modalOpen}
          onHide={() => setModalOpen(false)}
          aria-labelledby="example-custom-modal-styling-title"
          id="NavModal"
        >
          <Navbar expand="lg" className="bg-body-tertiary" id="mainNav">
            <Container fluid>
              <Navbar.Brand href="/" id='brand'>
                <img src={logo} alt="nav logo"  />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              {/* <div className='modalNavSearchButton'>
            <button className="btn" onClick={() => openNavModal(0)} >Stays</button>
            <button className="btn" onClick={() => openNavModal(0)} >Experience</button>
          </div> */}

              <div id="modalFilter">
                <button
                  className={modalFilterButton === 1 ? "active" : ""}
                  onClick={() => handleModalFilterBtnClick(1)}
                >
                  <div>Where</div>
                  <Form>
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      value={searchedValue}
                      aria-label="Search"
                      onChange={(event) => handleSearch(event)}
                      onKeyDown={(event) => handleSearchEnter(event)}
                    />
                  </Form>
                </button>
                <button
                  className={modalFilterButton === 2 ? "active" : ""}
                  onClick={() => handleModalFilterBtnClick(2)}
                >
                  <Calendar
                    btnName={"Check-in"}
                    date={startDate}
                    setDate={handleStartDateChange}
                    minDate={startDate}
                  />
                </button>
                <button
                  className={modalFilterButton === 3 ? "active" : ""}
                  onClick={() => handleModalFilterBtnClick(3)}
                >
                  <Calendar
                    btnName={"Check-out"}
                    date={endDate}
                    setDate={handleEndDateChange}
                    minDate={startDate}
                    open={checkOutOpen}
                  />
                </button>
                {/* <MultiCalendar/> */}
                <button
                  className={modalFilterButton === 4 ? "active" : ""}
                  onClick={() => handleModalFilterBtnClick(4)}
                >
                  <div>
                    <div>Who</div>
                    <div>Add guests</div>
                  </div>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      openNavModal(0);
                      handleSubmit()
                    }}
                  >
                    <LuSearch />
                  </button>
                </button>
              </div>
              {modalFilterButton === 1 && (
                <div id="modalSearch">
                  <div>
                    <div className="z-50 tabContentPlaces">
                      {inputValue === "" ? (
                        <>
                          {" "}
                          <div className="tabContent1Hold cursor-pointer">
                            <img
                              src={indiaMap}
                              alt="not found"
                              className={
                                searchedMap === "indiaMap"
                                  ? "tabContent1ImageActive"
                                  : "tabContent1Image"
                              }
                              onClick={() => handleMap("indiaMap")}
                            />
                            <img
                              src={northIndia}
                              alt="not found"
                              className={
                                searchedMap === "northIndia"
                                  ? "tabContent1ImageActive"
                                  : "tabContent1Image"
                              }
                              onClick={() => handleMap("northIndia")}
                            />
                            <img
                              src={westIndia}
                              alt="not found"
                              className={
                                searchedMap === "westIndia"
                                  ? "tabContent1ImageActive"
                                  : "tabContent1Image"
                              }
                              onClick={() => handleMap("westIndia")}
                            />
                          </div>
                          <div className="secImages">
                            <img
                              src={southIndia}
                              alt="not found"
                              className={
                                searchedMap === "southIndia"
                                  ? "tabContent1ImageActive"
                                  : "tabContent1Image"
                              }
                              onClick={() => handleMap("southIndia")}
                            />
                            <img
                              src={centralIndia}
                              alt="not found"
                              className={
                                searchedMap === "centralIndia"
                                  ? "tabContent1ImageActive mr-1"
                                  : "tabContent1Image mr-1"
                              }
                              onClick={() => handleMap("centralIndia")}
                            />
                            <img
                              src={eastIndia}
                              alt="not found"
                              className={
                                searchedMap === "eastIndia"
                                  ? "tabContent1ImageActive"
                                  : "tabContent1Image"
                              }
                              onClick={() => handleMap("eastIndia")}
                            />
                          </div>
                          <div className="secText">
                            <p className="fs"> South India </p>
                            <p className="fs"> Central India </p>
                            <p className="fs"> East India </p>
                          </div>
                          <div className="imgCaptionHold">
                            <p className="fs"> I'm flexible </p>
                            <p className="fs"> North India</p>
                            <p className="fs"> West India </p>
                          </div>{" "}
                        </>
                      ) : (
                        <>
                          <div className="serachResultsHold">
                            <p className=" fof text-xl text-center mt-3">
                              {" "}
                              MOST TRAVELLED PLACES{" "}
                            </p>
                            {/* <div className='searchDisplayParent'>
                          {placesArray.filter((item) => {

                            if (inputValue === "") {
                              return ""
                            }
                            else if (item.place.toLocaleLowerCase().includes(inputValue)) {
                              return item
                            }
                          }).map((item) => {
                            return (
                              <div className='searcdisplayIndivitual'>
                                <div>
                                  <Link to={`/location/${linkClickedVlaue}`}>
                                    <IoLocationOutline className=' inline-block mb-2 text-2xl' />
                                    <p onMouseOver={(e) => setLinkClickedValue(e.target.innerText)} className="capitalize fof inline-block">  {item.place} </p>
                                  </Link>
                                </div>
                              </div>
                            )
                          })}
                        </div> */}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {modalFilterButton === 4 && (
                <div id="guestModal">
                  <div className="tab3MainHold">
                    <div className="adultsKidsHold text-lg font-medium fof">
                      <p> Adults </p>
                      <p>Children</p>
                      <p>Infants </p>
                      {/* <p> Pets </p> */}
                    </div>

                    <div className="adultCriteriaHold">
                      <p className=" text-gray-400"> Ages 13 or above </p>
                      <p className=" text-gray-400"> Ages 2-12 </p>
                      <p className=" text-gray-400"> Under 2 </p>
                      {/* <p className=' text-gray-400'> Select pet friendly </p> */}
                    </div>
                    <div className="divideLineHold">
                      <p className="navLine"> </p>
                      <p className="navLine"> </p>
                      {/* <p className='navLine'>  </p> */}
                    </div>

                    <div className="btnControlsPlus">
                      <AiOutlinePlusCircle
                        className="fss"
                        onClick={increaeHandler}
                      />
                      <AiOutlinePlusCircle
                        className="fss"
                        onClick={childrenAdd}
                      />
                      <AiOutlinePlusCircle
                        className="fss"
                        onClick={infantsAdd}
                      />
                    </div>

                    <div className="btnControlMinus cursor-pointer" id="btnmin">
                      <AiOutlineMinusCircle
                        className="fss"
                        onClick={decreaseHandler}
                      />
                      <AiOutlineMinusCircle
                        className="fss"
                        onClick={childrenLess}
                      />
                      <AiOutlineMinusCircle
                        className="fss"
                        onClick={infantsLess}
                      />
                    </div>
                    <div className="navQtyHold">
                      <p className=" w-3"> {adultsQuantity} </p>
                      <p className=" w-3"> {children}</p>
                      <p className=" w-3">{infants} </p>
                    </div>

                    {/* <div className='selectWrapper'>
                    <Select
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
                      className="outline-none"
                    />
                  </div> */}
                  </div>
                </div>
              )}
            </Container>
          </Navbar>
        </Modal>
      </div>
      <LoginModal
        isOpen={openLogin}
        toggle={toggleLogin}
        openSignUp={toggleSignup}
      />
      <SignupModal
        isOpen={openSignup}
        toggle={toggleSignup}
        openLogin={toggleLogin}
      />
    </Fragment>
  );
}
