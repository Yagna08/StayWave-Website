import React, { useState } from "react";
import "../Styles/Detail.css";
import DescModel from "./DescModel";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Container, Card } from "react-bootstrap";
const Detail = (props) => {
  const [show, setShow] = useState(false);
  const hasWifi = props.hotel.listingAmenities.find(
    (item) => item.name === "Wifi" && item.isPresent === true
  );
  const hasAC = props.hotel.listingAmenities.find(
    (item) => item.name === "Air conditioning" && item.isPresent === true
  );
  const haspatio = props.hotel.listingAmenities.find(
    (item) => item.name === "Patio or balcony" && item.isPresent === true
  );
  const hasTV = props.hotel.listingAmenities.find(
    (item) => item.name === "TV" && item.isPresent === true
  );
  const hasWorkspace = props.hotel.listingAmenities.find(
    (item) => item.name === "Dedicated workspace" && item.isPresent === true
  );
  const hasSmoke = props.hotel.listingAmenities.find(
    (item) => item.name === "Smoke alarm" && item.isPresent === true
  );
  const hasPool = props.hotel.listingAmenities.find(
    (item) => item.name === "Pool" && item.isPresent === true
  );
  const hasBeach = props.hotel.listingAmenities.find(
    (item) => item.name === "Beachfront" && item.isPresent === true
  );
  const handleClick = () => {
    setShow(!show);
  };
  const splideOptions = {
    type: "slide",
    perPage: 3, // Number of slides to show at once
    perMove: 1, // Number of slides to move when navigating
    gap: 0, // Gap between slides
    breakpoints: {
      1200: {
        perPage: 4,
        perMove: 4,
      },
      992: {
        perPage: 3,
        perMove: 3,
      },
      769: {
        perPage: 2,
        perMove: 2,
      },
      576: {
        perPage: 1,
        perMove: 1,
      },
    },
  };
  return (
    <div className="box p-2 ms-2">
      <div className="d-flex justify-content-between price">
        <div className="flex-column">
          <div className="name">
            {props.hotel.roomType} hosted by {props.hotel.primaryHost.firstName}
          </div>
          <div className="detail">
            {props.hotel.guestControls.personCapacity} guests ·{" "}
            {props.hotel.bedroomLabel} Bedrooms · {props.hotel.bedLabel} Beds ·{" "}
            {props.hotel.bathroomLabel} Baths
          </div>
        </div>
        <div>
          <img className="Rimage" src={props.hotel.primaryHost.thumbnailUrl} />
        </div>
      </div>
      <hr />
      <div className="d-flex">
        <div className="svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              height: 28,
              width: 28,
              fill: "currentcolor",
            }}
          >
            <path d="M24.33 1.67a2 2 0 0 1 2 1.85v24.81h3v2H2.67v-2h3V3.67a2 2 0 0 1 1.85-2h.15zm-4 2H7.67v24.66h12.66zm4 0h-2v24.66h2zm-7 11a1.33 1.33 0 1 1 0 2.66 1.33 1.33 0 0 1 0-2.66z"></path>
          </svg>
        </div>
        <div className="flex-column Amargin">
          <div className="Sname">Self check-in</div>
          <div className="Sdetail">
            You can check in with the building staff.
          </div>
        </div>
      </div>
      <br />
      <div className="d-flex">
        <div className="svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              height: 24,
              width: 24,
              fill: "currentcolor",
            }}
          >
            <path d="M16.84 27.16v-3.4l-.26.09c-.98.32-2.03.51-3.11.55h-.7A11.34 11.34 0 0 1 1.72 13.36v-.59A11.34 11.34 0 0 1 12.77 1.72h.59c6.03.16 10.89 5.02 11.04 11.05V13.45a11.3 11.3 0 0 1-.9 4.04l-.13.3 7.91 7.9v5.6H25.7l-4.13-4.13zM10.31 7.22a3.1 3.1 0 1 1 0 6.19 3.1 3.1 0 0 1 0-6.2zm0 2.06a1.03 1.03 0 1 0 0 2.06 1.03 1.03 0 0 0 0-2.06zM22.43 25.1l4.12 4.13h2.67v-2.67l-8.37-8.37.37-.68.16-.3c.56-1.15.9-2.42.96-3.77v-.64a9.28 9.28 0 0 0-9-9h-.55a9.28 9.28 0 0 0-9 9v.54a9.28 9.28 0 0 0 13.3 8.1l.3-.16 1.52-.8v4.62z"></path>
          </svg>
        </div>
        <div className="flex-column Amargin">
          <div className="Sname">Great check-in experience</div>
          <div className="Sdetail">
            92% of recent guests gave the check-in process a 5-star rating.
          </div>
        </div>
      </div>
      <br />
      <div className="d-flex">
        <div className="svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              height: 24,
              width: 24,
              fill: "currentcolor",
            }}
          >
            <path d="M17 6a2 2 0 0 1 2 1.85v8.91l.24.24H24v-3h-3a1 1 0 0 1-.98-1.2l.03-.12 2-6a1 1 0 0 1 .83-.67L23 6h4a1 1 0 0 1 .9.58l.05.1 2 6a1 1 0 0 1-.83 1.31L29 14h-3v3h5a1 1 0 0 1 1 .88V30h-2v-3H20v3h-2v-3H2v3H0V19a3 3 0 0 1 1-2.24V8a2 2 0 0 1 1.85-2H3zm13 13H20v6h10zm-13-1H3a1 1 0 0 0-1 .88V25h16v-6a1 1 0 0 0-.77-.97l-.11-.02zm8 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM17 8H3v8h2v-3a2 2 0 0 1 1.85-2H13a2 2 0 0 1 2 1.85V16h2zm-4 5H7v3h6zm13.28-5h-2.56l-1.33 4h5.22z"></path>
          </svg>
        </div>
        <div className="flex-column Amargin">
          <div className="Sname">Room in a villa</div>
          <div className="Sdetail">
            Your own room in a home, plus access to shared spaces.
          </div>
        </div>
      </div>
      <div>
        <hr />
        <div>
          <div className="name">About this place</div>
          <br />
          <p classs="para">
            {props.hotel.sectionedDescription.description.split("\n\n")[0]}...
          </p>
          <span
            className="detail"
            style={{ fontWeight: "600", cursor: "pointer" }}
            onClick={() => handleClick()}
          >
            Learn more...
          </span>
        </div>
      </div>
      <div className="name mt-4 mb-2">What this place offers</div>

      <div className="row">
        <div className="col-sm-6">
          {/* {props.hotel.listingAmenities.map((amenity) => {
            return()
          })} */}
          <ul className="list-unstyled">
            <li>
              <div className="d-flex mt-2 p-1">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    __cporiginalvalueofinnerhtml='<path d="M16 20.33a3.67 3.67 0 1 1 0 7.34 3.67 3.67 0 0 1 0-7.34zm0 2a1.67 1.67 0 1 0 0 3.34 1.67 1.67 0 0 0 0-3.34zM16 15a9 9 0 0 1 8.04 4.96l-1.51 1.51a7 7 0 0 0-13.06 0l-1.51-1.51A9 9 0 0 1 16 15zm0-5.33c4.98 0 9.37 2.54 11.94 6.4l-1.45 1.44a12.33 12.33 0 0 0-20.98 0l-1.45-1.45A14.32 14.32 0 0 1 16 9.66zm0-5.34c6.45 0 12.18 3.1 15.76 7.9l-1.43 1.44a17.64 17.64 0 0 0-28.66 0L.24 12.24c3.58-4.8 9.3-7.9 15.76-7.9z" />'
                    __cpp={1}
                    style={{
                      display: "block",
                      height: 24,
                      width: 24,
                      fill: "currentcolor",
                    }}
                  >
                    <path
                      d="M16 20.33a3.67 3.67 0 1 1 0 7.34 3.67 3.67 0 0 1 0-7.34zm0 2a1.67 1.67 0 1 0 0 3.34 1.67 1.67 0 0 0 0-3.34zM16 15a9 9 0 0 1 8.04 4.96l-1.51 1.51a7 7 0 0 0-13.06 0l-1.51-1.51A9 9 0 0 1 16 15zm0-5.33c4.98 0 9.37 2.54 11.94 6.4l-1.45 1.44a12.33 12.33 0 0 0-20.98 0l-1.45-1.45A14.32 14.32 0 0 1 16 9.66zm0-5.34c6.45 0 12.18 3.1 15.76 7.9l-1.43 1.44a17.64 17.64 0 0 0-28.66 0L.24 12.24c3.58-4.8 9.3-7.9 15.76-7.9z"
                      __cpp={1}
                    />
                  </svg>
                </div>
                <div
                  className="ms-3 amenity-text"
                  style={{ textDecoration: hasWifi ? "none" : "line-through" }}
                >
                  Wifi
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex mt-2 p-1">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style={{
                      display: "block",
                      height: 24,
                      width: 24,
                      fill: "currentcolor",
                    }}
                  >
                    <path d="M17 1v4.03l4.03-2.32 1 1.73L17 7.34v6.93l6-3.47V5h2v4.65l3.49-2.02 1 1.74L26 11.38l4.03 2.33-1 1.73-5.03-2.9L18 16l6 3.46 5.03-2.9 1 1.73L26 20.62l3.49 2.01-1 1.74L25 22.35V27h-2v-5.8l-6-3.47v6.93l5.03 2.9-1 1.73L17 26.97V31h-2v-4.03l-4.03 2.32-1-1.73 5.03-2.9v-6.93L9 21.2V27H7v-4.65l-3.49 2.02-1-1.74L6 20.62l-4.03-2.33 1-1.73L8 19.46 14 16l-6-3.46-5.03 2.9-1-1.73L6 11.38 2.51 9.37l1-1.74L7 9.65V5h2v5.8l6 3.47V7.34l-5.03-2.9 1-1.73L15 5.03V1z" />
                  </svg>
                </div>
                <div
                  className="ms-3 amenity-text"
                  style={{ textDecoration: hasAC ? "none" : "line-through" }}
                >
                  Air conditioning
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex mt-2 p-1">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style={{
                      display: "block",
                      height: 24,
                      width: 24,
                      fill: "currentcolor",
                    }}
                  >
                    <path d="M23 1a2 2 0 0 1 2 1.85V19h4v2h-2v8h2v2H3v-2h2v-8H3v-2h4V3a2 2 0 0 1 1.85-2H9zM9 21H7v8h2zm4 0h-2v8h2zm4 0h-2v8h2zm4 0h-2v8h2zm4 0h-2v8h2zm-10-8H9v6h6zm8 0h-6v6h6zM15 3H9v8h6zm8 0h-6v8h6z" />
                  </svg>
                </div>
                <div
                  className="ms-3 amenity-text"
                  style={{ textDecoration: haspatio ? "none" : "line-through" }}
                >
                  Patio or balcony
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex mt-2 p-1">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style={{
                      display: "block",
                      height: "24px",
                      width: "24px",
                      fill: "currentcolor",
                    }}
                  >
                    <path d="M24 27c.99 0 1.95.35 2.67 1 .3.29.71.45 1.14.5H28v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 29c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 29c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 29c-.5 0-.98.17-1.33.5a3.96 3.96 0 0 1-2.44 1H4v-2h.19a1.95 1.95 0 0 0 1.14-.5A3.98 3.98 0 0 1 8 27c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 27c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 27zm0-5c.99 0 1.95.35 2.67 1 .3.29.71.45 1.14.5H28v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 24c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 24c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 24c-.5 0-.98.17-1.33.5a3.96 3.96 0 0 1-2.44 1H4v-2h.19a1.95 1.95 0 0 0 1.14-.5A3.98 3.98 0 0 1 8 22c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 22c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 22zm0-5c.99 0 1.95.35 2.67 1 .3.29.71.45 1.14.5H28v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 19c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 19c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 19c-.5 0-.98.17-1.33.5a3.96 3.96 0 0 1-2.44 1H4v-2h.19a1.95 1.95 0 0 0 1.14-.5A3.98 3.98 0 0 1 8 17c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 17c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 17zM16 1a9 9 0 0 1 8.76 11.07c.71.13 1.37.45 1.91.94.3.27.71.44 1.14.48l.19.01v2h-.23a3.96 3.96 0 0 1-2.44-1 1.95 1.95 0 0 0-1.14-.5H23.96a2 2 0 0 0-1.15.38l-.14.11A3.98 3.98 0 0 1 20 15.5a3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 14c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1 1.95 1.95 0 0 0-1.14-.5H7.96a2 2 0 0 0-1.15.38l-.14.11a3.96 3.96 0 0 1-2.44 1L4 15.5v-2h.19a1.95 1.95 0 0 0 1.14-.5 3.92 3.92 0 0 1 1.9-.93A9 9 0 0 1 16 1zm0 2a7 7 0 0 0-6.64 9.23c.49.17.93.43 1.31.78.35.32.83.49 1.33.49.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 12c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5a2 2 0 0 0 1.2-.38l.13-.11c.38-.35.82-.6 1.3-.78A7 7 0 0 0 16 3z"></path>
                  </svg>
                </div>
                <div
                  className="ms-3 amenity-text"
                  style={{ textDecoration: hasBeach ? "none" : "line-through" }}
                >
                  Beach Access
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-sm-6">
          <ul className="list-unstyled">
            <li>
              <div className="d-flex mt-2 p-1">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style={{
                      display: "block",
                      height: 24,
                      width: 24,
                      fill: "currentcolor",
                    }}
                  >
                    <path d="M16 1a15 15 0 1 1 0 30 15 15 0 0 1 0-30zm0 2a13 13 0 1 0 0 26 13 13 0 0 0 0-26zm-4.9 14a5 5 0 0 0 3.9 3.9v2.03A7 7 0 0 1 9.07 17zm9.8 0h2.03A7 7 0 0 1 17 22.93V20.9a5 5 0 0 0 3.9-3.9zM16 13a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm1-5.93A7 7 0 0 1 22.93 15H20.9a5 5 0 0 0-3.9-3.9zm-2 0v2.03a5 5 0 0 0-3.9 3.9H9.07A7 7 0 0 1 15 9.07zM23 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                </div>
                <div
                  className="ms-3 amenity-text"
                  style={{ textDecoration: hasSmoke ? "none" : "line-through" }}
                >
                  Smoke alarm
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex mt-2 p-1">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style={{
                      display: "block",
                      height: "24px",
                      width: "24px",
                      fill: "currentcolor",
                    }}
                  >
                    <path d="M26 2a1 1 0 0 1 .92.61l.04.12 2 7a1 1 0 0 1-.85 1.26L28 11h-3v5h6v2h-2v13h-2v-2.54a3.98 3.98 0 0 1-1.73.53L25 29H7a3.98 3.98 0 0 1-2-.54V31H3V18H1v-2h5v-4a1 1 0 0 1 .88-1h.36L6.09 8.4l1.82-.8L9.43 11H12a1 1 0 0 1 1 .88V16h10v-5h-3a1 1 0 0 1-.99-1.16l.03-.11 2-7a1 1 0 0 1 .84-.72L22 2h4zm1 16H5v7a2 2 0 0 0 1.7 1.98l.15.01L7 27h18a2 2 0 0 0 2-1.85V18zm-16-5H8v3h3v-3zm14.24-9h-2.49l-1.43 5h5.35l-1.43-5z"></path>
                  </svg>
                </div>
                <div
                  className="ms-3 amenity-text"
                  style={{
                    textDecoration: hasWorkspace ? "none" : "line-through",
                  }}
                >
                  Dedicated Workspace
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex mt-2 p-1">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style={{
                      display: "block",
                      height: 24,
                      width: 24,
                      fill: "currentcolor",
                    }}
                  >
                    <path d="M9 29v-2h2v-2H6a5 5 0 0 1-5-4.78V8a5 5 0 0 1 4.78-5H26a5 5 0 0 1 5 4.78V20a5 5 0 0 1-4.78 5H21v2h2v2zm10-4h-6v2h6zm7-20H6a3 3 0 0 0-3 2.82V20a3 3 0 0 0 2.82 3H26a3 3 0 0 0 3-2.82V8a3 3 0 0 0-2.82-3z" />
                  </svg>
                </div>
                <div
                  className="ms-3 amenity-text"
                  style={{ textDecoration: hasTV ? "none" : "line-through" }}
                >
                  TV
                </div>
              </div>
            </li>
            <li>
              <div className="d-flex mt-2 p-1">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style={{
                      display: "block",
                      height: 24,
                      width: 24,
                      fill: "currentcolor",
                    }}
                  >
                    <path d="M24 26c.99 0 1.95.35 2.67 1 .3.29.71.45 1.14.5H28v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 28c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 28c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 28c-.5 0-.98.17-1.33.5a3.96 3.96 0 0 1-2.44 1H4v-2h.19a1.95 1.95 0 0 0 1.14-.5A3.98 3.98 0 0 1 8 26c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 26c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 26zm0-5c.99 0 1.95.35 2.67 1 .3.29.71.45 1.14.5H28v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 23c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 23c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 23c-.5 0-.98.17-1.33.5a3.96 3.96 0 0 1-2.44 1H4v-2h.19a1.95 1.95 0 0 0 1.14-.5A3.98 3.98 0 0 1 8 21c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.97 3.97 0 0 1 16 21c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5A3.98 3.98 0 0 1 24 21zM20 3a4 4 0 0 1 4 3.8V9h4v2h-4v5a4 4 0 0 1 2.5.86l.17.15c.3.27.71.44 1.14.48l.19.01v2h-.23a3.96 3.96 0 0 1-2.44-1A1.98 1.98 0 0 0 24 18c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 16 18c-.5 0-.98.17-1.33.5a3.98 3.98 0 0 1-2.67 1 3.98 3.98 0 0 1-2.67-1A1.98 1.98 0 0 0 8 18c-.5 0-.98.17-1.33.5a3.96 3.96 0 0 1-2.44 1H4v-2h.19a1.95 1.95 0 0 0 1.14-.5A3.98 3.98 0 0 1 8 16c.99 0 1.95.35 2.67 1 .35.33.83.5 1.33.5.5 0 .98-.17 1.33-.5a3.96 3.96 0 0 1 2.44-1H16v-5H4V9h12V7a2 2 0 0 0-4-.15V7h-2a4 4 0 0 1 7-2.65A3.98 3.98 0 0 1 20 3zm-2 13.52.46.31.21.18c.35.31.83.49 1.33.49a2 2 0 0 0 1.2-.38l.13-.11c.2-.19.43-.35.67-.49V11h-4zM20 5a2 2 0 0 0-2 1.85V9h4V7a2 2 0 0 0-2-2z" />
                  </svg>
                </div>
                <div
                  className="ms-3 amenity-text"
                  style={{ textDecoration: hasPool ? "none" : "line-through" }}
                >
                  Pool
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <DescModel isOpen={show} toggle={handleClick} hotel={props.hotel} />
      {props.hotel.listingRooms == [] && (
        <>
          <div className="name mt-4 mb-2">Where you'll sleep</div>
          <div className="row">
            <Container className="splide-container pt-2 pb-4 ms-0">
              <Splide options={splideOptions}>
                {/* <Container> */}
                {props.hotel.listingRooms.map((room) => (
                  <SplideSlide key={room.id}>
                    <Card className="swiper-bed">
                      <Card.Body>
                        <div className="svg-container">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 32 32"
                              aria-hidden="true"
                              role="presentation"
                              focusable="false"
                              style={{
                                height: 24,
                                width: 24,
                                fill: "currentcolor",
                              }}
                            >
                              <path d="M28 2a2 2 0 0 1 2 1.85v9.99l1.85 5.54a3 3 0 0 1 .11.46l.03.24.01.24V30h-2v-2H2v2H0v-9.68a3 3 0 0 1 .09-.71l.06-.23L2 13.84V4a2 2 0 0 1 1.7-1.98L3.85 2H4zm2 20H2v4h28zm-1.39-6H3.4l-1.34 4h27.9zM28 4H4v10h2v-4a2 2 0 0 1 1.85-2H24a2 2 0 0 1 2 1.85V14h2zm-13 6H8v4h7zm9 0h-7v4h7z" />
                            </svg>
                          </span>
                          {room.beds.map((bed) => (
                            <div key={bed.id} className="d-flex">
                              <span>
                                {bed.type === "crib" ? (
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 32 32"
                                      aria-hidden="true"
                                      role="presentation"
                                      focusable="false"
                                      style={{
                                        height: 24,
                                        width: 24,
                                        fill: "currentcolor",
                                      }}
                                    >
                                      <path d="M3 3v4h26V3h2v18a5 5 0 0 1-4 4.9V30h-2v-4H7v4H5v-4.1a5 5 0 0 1-4-4.68V3zm6 6H7v15h2zm4 0h-2v15h2zm4 0h-2v15h2zm4 0h-2v15h2zm4 0h-2v15h2zM5 9H3v12a3 3 0 0 0 2 2.83zm24 0h-2v14.83a3 3 0 0 0 2-2.65V21z" />
                                    </svg>
                                  </span>
                                ) : (
                                  <span></span>
                                )}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="pt-3">
                          <h6>Bedroom {room.roomNumber}</h6>
                          <div>
                            {room.beds[0].type === "king_bed" ? (
                              <span>King Bed</span>
                            ) : room.beds[0].type === "queen_bed" ? (
                              <span>Queen Bed</span>
                            ) : (
                              <span>Double Bed</span>
                            )}
                            {room.beds.map((bed) =>
                              bed.type === "crib" ? (
                                <span> & Crib</span>
                              ) : (
                                <span></span>
                              )
                            )}
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </SplideSlide>
                ))}

                {/* </Container> */}
              </Splide>
            </Container>
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
