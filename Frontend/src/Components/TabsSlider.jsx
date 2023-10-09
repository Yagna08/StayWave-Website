import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Fragment, useState, useEffect } from "react";
import TabsFilterModal from "./TabsFilterModal";
import typeFarms from "../Images/typeFarms.jpg";
import typeRoom from "../Images/typeRoom.jpg";
import typeAmazingPools from "../Images/typeAmazingPools.jpg";
import typeAmazingViews from "../Images/typeAmazingViews.jpg";
import typeArctic from "../Images/typeArctic.jpg";
import typeBeach from "../Images/typeBeach.jpg";
import typeCaravan from "../Images/typeCaravan.jpg";
import typeDesert from "../Images/typeDesert.jpg";
import typeIconicCities from "../Images/typeIconicCities.jpg";
import typeIslands from "../Images/typeIslands.jpg";
import typeMansions from "../Images/typeMansions.jpg";
import typeTropical from "../Images/typeTropical.jpg";
import typeVilla from "../Images/typeVilla.jpg";
import "../Styles/TabsSlider.css";
import { Container, Tab } from "react-bootstrap";

export default function TabsSlider(props) {
  const [filterModal, setFilterModal] = useState(false);
  const [active, setActive] = useState(1);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100000);
  const [beds, setBeds] = useState(0);
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [typex, setTypex] = useState("farms");
  const handleToggleFilterModal = () => {
    setFilterModal(!filterModal);
  };

  const splideOptions = {
    type: "slide",
    perPage: 7, // Number of slides to show at once
    perMove: 7, // Number of slides to move when navigating
    gap: 0, // Gap between slides
    rewind: false, // Whether to rewind when reaching the end
    pagination: false, // Disable pagination
    breakpoints: {
      1200: {
        perPage: 7,
        perMove: 7,
      },
      992: {
        perPage: 6,
        perMove: 6,
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
  const value = (min, max, bedrooms, beds, bathrooms) => {
    setMin(min);
    setMax(max);
    setBeds(beds);
    setBedrooms(bedrooms);
    setBathrooms(bathrooms);
  };
  useEffect(() => {
    props.type(typex);
  }, []);

  return (
    <Fragment>
      <div className="d-flex" class='-mt-10'>
        <Container>
            <Splide options={splideOptions} id="slider">
              <SplideSlide
                onClick={() => setActive(1)}
                className={active === 1 ? "activeImg" : "inactiveImg"}
              >
                <div
                  onClick={() => {
                    setTypex("farms");
                    props.type('farms');
                  }}
                >
                  <span className="flex flex-col items-center justify-center">
                    <img className="md:w-8 w-6" src={typeFarms} alt="hey" />
                    <div>Farms</div>
                  </span>
                </div>
              </SplideSlide>
              <SplideSlide
                onClick={() => setActive(2)}
                className={active === 2 ? "activeImg" : "inactiveImg"}
              >
                <div
                  onClick={() => {
                    setTypex("rooms");
                    props.type("rooms");
                  }}
                >
                  <span className="flex flex-col items-center justify-center">
                    <img className="md:w-8 w-6" src={typeRoom} alt="hey" />
                    <div>Rooms</div>
                  </span>
                </div>
              </SplideSlide>

              <SplideSlide
                onClick={() => setActive(3)}
                className={active === 3 ? "activeImg" : "inactiveImg"}
              >
                <div
                  onClick={() => {
                    setTypex("amazing pools");
                    props.type("amazing pools");
                  }}
                >
                  <span className="flex flex-col items-center justify-center">
                    <img
                      className="md:w-8 w-6"
                      src={typeAmazingPools}
                      alt="hey"
                    />
                    <div>Amazing Pools</div>
                  </span>
                </div>
              </SplideSlide>
              <SplideSlide
                onClick={() => setActive(4)}
                className={active === 4 ? "activeImg" : "inactiveImg"}
              >
                <div
                  onClick={() => {
                    props.type("amazing views");
                  }}
                >
                  <span className="flex flex-col items-center justify-center">
                    <img
                      className="md:w-8 w-6"
                      src={typeAmazingViews}
                      alt="hey"
                    />
                    <div>Amazing Views</div>
                  </span>
                </div>
              </SplideSlide>

              <SplideSlide
                onClick={() => setActive(5)}
                className={active === 5 ? "activeImg" : "inactiveImg"}
              >
                <div
                  onClick={() => {
                    props.type("arctic");
                  }}
                >
                  <span className="flex flex-col items-center justify-center">
                    <img className="md:w-8 w-6" src={typeArctic} alt="hey" />
                    <div>Arctic</div>
                  </span>
                </div>
              </SplideSlide>

              <SplideSlide
                onClick={() => setActive(6)}
                className={active === 6 ? "activeImg" : "inactiveImg"}
              >
                <div
                  onClick={() => {
                    props.type("beach");
                  }}
                >
                  <span className="flex flex-col items-center justify-center">
                    <img className="md:w-8 w-6" src={typeBeach} alt="hey" />
                    <div>Beach</div>
                  </span>
                </div>
              </SplideSlide>

              <SplideSlide
                onClick={() => setActive(7)}
                className={active === 7 ? "activeImg" : "inactiveImg"}
              >
                <div
                  onClick={() => {
                    props.type("caravan");
                  }}
                >
                  <span className="flex flex-col items-center justify-center">
                    <img className="md:w-8 w-6" src={typeCaravan} alt="hey" />
                    <div>Caravan</div>
                  </span>
                </div>
              </SplideSlide>
              <SplideSlide
                onClick={() => setActive(8)}
                className={active === 8 ? "activeImg" : "inactiveImg"}
              >
                <div
                  onClick={() => {
                    props.type("desert");
                  }}
                >
                  <span className="flex flex-col items-center justify-center">
                    <img className="md:w-8 w-6" src={typeDesert} alt="hey" />
                    <div>Desert</div>
                  </span>
                </div>
              </SplideSlide>

              <SplideSlide
                onClick={() => setActive(9)}
                className={active === 9 ? "activeImg" : "inactiveImg"}
              >
                <div
                  onClick={() => {
                    props.type("iconic cities");
                  }}
                >
                  <span className="flex flex-col items-center justify-center">
                    <img
                      className="md:w-8 w-6"
                      src={typeIconicCities}
                      alt="hey"
                    />
                    <div>Iconic Cities</div>
                  </span>
                </div>
              </SplideSlide>

              <SplideSlide
                onClick={() => setActive(10)}
                className={active === 10 ? "activeImg" : "inactiveImg"}
              >
                <div
                  onClick={() => {
                    props.type("islands");
                  }}
                >
                  <span className="flex flex-col items-center justify-center">
                    <img className="md:w-8 w-6" src={typeIslands} alt="hey" />
                    <div>Islands</div>
                  </span>
                </div>
              </SplideSlide>

              <SplideSlide
                onClick={() => setActive(11)}
                className={active === 11 ? "activeImg" : "inactiveImg"}
              >
                <div
                  onClick={() => {
                    props.type("mansions");
                  }}
                >
                  <span className="flex flex-col items-center justify-center">
                    <img className="md:w-8 w-6" src={typeMansions} alt="hey" />
                    <div>Mansions</div>
                  </span>
                </div>
              </SplideSlide>

              <SplideSlide
                onClick={() => setActive(12)}
                className={active === 12 ? "activeImg" : "inactiveImg"}
              >
                <div
                  onClick={() => {
                    props.type("tropical");
                  }}
                >
                  <span className="flex flex-col items-center justify-center">
                    <img className="md:w-8 w-6" src={typeTropical} alt="hey" />
                    <div>Tropical</div>
                  </span>
                </div>
              </SplideSlide>
              <SplideSlide
                onClick={() => setActive(13)}
                className={active === 13 ? "activeImg" : "inactiveImg"}
              >
                <div
                  onClick={() => {
                    props.type("villa");
                  }}
                >
                  <span className="flex flex-col items-center justify-center">
                    <img className="md:w-8 w-6" src={typeVilla} alt="hey" />
                    <div>Villas</div>
                  </span>
                </div>
              </SplideSlide>
            </Splide>
        </Container>
      </div>
    </Fragment>
  );
}
