import { Container, Button, Modal } from "react-bootstrap";
import { Fragment, useState, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Checkbox, Form, Input, Col, Row } from "antd";
import "../Styles/TabsFilterModal.css";
import "../Styles/TabsSlider.css";

export default function TabsFilterModal(props) {
  
  const [form] = Form.useForm();
  const [checkboxValues, setCheckboxValues] = useState([])
  const [filterModal, setFilterModal] = useState(false);
  const [filterState, setFilterState] = useState({
    roomsActive: 0,
    bedsActive: 0,
    bathroomsActive: 0,
    sliderValue: [830, 30000],
    allCheckboxValues: {
      "Air conditioning": false,
      Wifi: false,
      "Patio or balcony": false,
      TV: false,
      "Dedicated workspace": false,
      "Smoke alarm": false,
      Pool: false,
      Beachfront: false,
    }
  });
  

  const handleCheckboxChange = (checked, name) => {
    // Create a new copy of the filterState object to avoid mutating it
    const updatedFilterState = { ...filterState };

    if (checked) {
      
      // Add the name to the amenities array
      updatedFilterState.allCheckboxValues[name] = true;
    } else {
      // Remove the name from the amenities array
      updatedFilterState.allCheckboxValues[name] = false;
    }
    const cbValues = Object.keys(filterState.allCheckboxValues).filter(
      (key) => filterState.allCheckboxValues[key]
    );
    console.log(cbValues)
    setCheckboxValues(cbValues);
    

    // Update the filterState
    setFilterState(updatedFilterState);
  };





  const allClearFilter = () => {
    setFilterState({
      roomsActive: 0,
      bedsActive: 0,
      bathroomsActive: 0,
      sliderValue: [830, 30000],
      allCheckboxValues: {
        "Air conditioning": false,
        Wifi: false,
        "Patio or balcony": false,
        TV: false,
        "Dedicated workspace": false,
        "Smoke alarm": false,
        Pool: false,
        Beachfront: false,
      }
    });
    setCheckboxValues([])
  };

  const handleSliderChange = (value) => {
    // Update filterState with the new slider value
    setFilterState((prevState) => ({
      ...prevState,
      sliderValue: value,
    }));
  };

  const handleMinValueChange = (e) => {
    const minValue = Number(e.target.value);
    // Update filterState with the new minimum value
    setFilterState((prevState) => ({
      ...prevState,
      sliderValue: [minValue, prevState.sliderValue[1]],
    }));
  };

  const handleMaxValueChange = (e) => {
    const maxValue = Number(e.target.value);
    // Update filterState with the new maximum value
    setFilterState((prevState) => ({
      ...prevState,
      sliderValue: [prevState.sliderValue[0], maxValue],
    }));
  };

  const handleToggleFilterModal = () => {
    setFilterModal(!filterModal);
  };




  return (
    <Fragment>
      <button
        className="filterTabs btn d-none d-md-block"
        onClick={() => handleToggleFilterModal()}
      >
        {" "}
        Filter
      </button>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        scrollable={true}
        show={filterModal}
        id="filterModal"
        animation="true"
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">Filter</Modal.Title>
          <button
            type="button"
            class="btn-close"
            aria-label="Close"
            onClick={handleToggleFilterModal}
          ></button>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <div id="priceRange">
              <h4>Price Range</h4>
              <p>Nightly prices before fees and taxes</p>
              <div id="priceSlider">
                <div>
                  <Slider
                    range
                    min={830}
                    max={30000}
                    step={1}
                    defaultValue={[830, 30000]}
                    value={filterState.sliderValue}
                    trackStyle={{ backgroundColor: "black", height: 10 }}
                    railStyle={{ backgroundColor: "lightgrey", height: 10 }}
                    handleStyle={{
                      borderColor: "black",
                      height: 20,
                      width: 20,
                      marginLeft: 1,
                      marginBottom: 5,
                      backgroundColor: "grey",
                    }}
                    onChange={handleSliderChange}
                  />
                  <Form>
                    <Form.Item>
                      Minimum
                      <Input
                        type="number"
                        value={filterState.sliderValue[0]}
                        onChange={handleMinValueChange}
                      />
                    </Form.Item>

                    <Form.Item>
                      Maximum
                      <Input
                        type="number"
                        value={filterState.sliderValue[1]}
                        onChange={handleMaxValueChange}
                      />
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </div>
            <hr />
            <div id="roomsBeds">
              <h4>Rooms and Beds</h4>
              <div id="bedrooms">
                <div>Bedrooms</div>
                <div className="roomsBedsBtn">
                  {Array(9)
                    .fill(1)
                    .map((el, i) =>
                      i === 0 ? (
                        <button
                          onClick={() =>
                            setFilterState((prevState) => ({
                              ...prevState,
                              roomsActive: i,
                            }))
                          }
                          className={
                            filterState.roomsActive === i
                              ? "roomsActive"
                              : "roomsNotActive"
                          }
                        >
                          Any
                        </button>
                      ) : i === 8 ? (
                        <button
                          onClick={() =>
                            setFilterState((prevState) => ({
                              ...prevState,
                              roomsActive: i,
                            }))
                          }
                          className={
                            filterState.roomsActive === i
                              ? "roomsActive"
                              : "roomsNotActive"
                          }
                        >
                          {i}+
                        </button>
                      ) : (
                        <button
                          onClick={() =>
                            setFilterState((prevState) => ({
                              ...prevState,
                              roomsActive: i,
                            }))
                          }
                          className={
                            filterState.roomsActive === i
                              ? "roomsActive"
                              : "roomsNotActive"
                          }
                        >
                          {i}
                        </button>
                      )
                    )}
                </div>
              </div>
              <div id="beds">
                <div>Beds</div>
                <div className="roomsBedsBtn">
                  {Array(9)
                    .fill(1)
                    .map((el, i) =>
                      i === 0 ? (
                        <button
                          onClick={() =>
                            setFilterState((prevState) => ({
                              ...prevState,
                              bedsActive: i,
                            }))
                          }
                          className={
                            filterState.bedsActive === i
                              ? "roomsActive"
                              : "roomsNotActive"
                          }
                        >
                          Any
                        </button>
                      ) : i === 8 ? (
                        <button
                          onClick={() =>
                            setFilterState((prevState) => ({
                              ...prevState,
                              bedsActive: i,
                            }))
                          }
                          className={
                            filterState.bedsActive === i
                              ? "roomsActive"
                              : "roomsNotActive"
                          }
                        >
                          {i}+
                        </button>
                      ) : (
                        <button
                          onClick={() =>
                            setFilterState((prevState) => ({
                              ...prevState,
                              bedsActive: i,
                            }))
                          }
                          className={
                            filterState.bedsActive === i
                              ? "roomsActive"
                              : "roomsNotActive"
                          }
                        >
                          {i}
                        </button>
                      )
                    )}
                </div>
              </div>
              <div id="bathrooms">
                <div>Bathrooms</div>
                <div className="roomsBedsBtn">
                  {Array(9)
                    .fill(1)
                    .map((el, i) =>
                      i === 0 ? (
                        <button
                          onClick={() =>
                            setFilterState((prevState) => ({
                              ...prevState,
                              bathroomsActive: i,
                            }))
                          }
                          className={
                            filterState.bathroomsActive === i
                              ? "roomsActive"
                              : "roomsNotActive"
                          }
                        >
                          Any
                        </button>
                      ) : i === 8 ? (
                        <button
                          onClick={() =>
                            setFilterState((prevState) => ({
                              ...prevState,
                              bathroomsActive: i,
                            }))
                          }
                          className={
                            filterState.bathroomsActive === i
                              ? "roomsActive"
                              : "roomsNotActive"
                          }
                        >
                          {i}+
                        </button>
                      ) : (
                        <button
                          onClick={() =>
                            setFilterState((prevState) => ({
                              ...prevState,
                              bathroomsActive: i,
                            }))
                          }
                          className={
                            filterState.bathroomsActive === i
                              ? "roomsActive"
                              : "roomsNotActive"
                          }
                        >
                          {i}
                        </button>
                      )
                    )}
                </div>
              </div>
            </div>
            <hr />

            <div>
              <h4>Amenities</h4>
              <Form form={form}>
                <Row>
                  <Col span={12}>
                    <Form.Item name="Air conditioning">
                      <Checkbox
                        checked={
                          filterState.allCheckboxValues["Air conditioning"]
                        }
                        onChange={(e) =>
                          handleCheckboxChange(
                            e.target.checked,
                            "Air conditioning"
                          )
                        }
                      >
                        Air conditioning
                      </Checkbox>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item name="Wifi">
                      <Checkbox
                        checked={filterState.allCheckboxValues["Wifi"]}
                        onChange={(e) =>
                          handleCheckboxChange(e.target.checked, "Wifi")
                        }
                      >
                        Wifi
                      </Checkbox>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item name="Patio or balcony">
                      <Checkbox
                        checked={
                          filterState.allCheckboxValues["Patio or balcony"]
                        }
                        onChange={(e) =>
                          handleCheckboxChange(
                            e.target.checked,
                            "Patio or balcony"
                          )
                        }
                      >
                        Patio or balcony
                      </Checkbox>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item name="TV">
                      <Checkbox
                        checked={filterState.allCheckboxValues["TV"]}
                        onChange={(e) =>
                          handleCheckboxChange(e.target.checked, "TV")
                        }
                      >
                        TV
                      </Checkbox>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item name="Dedicated workspace">
                      <Checkbox
                        checked={
                          filterState.allCheckboxValues["Dedicated workspace"]
                        }
                        onChange={(e) =>
                          handleCheckboxChange(
                            e.target.checked,
                            "Dedicated workspace"
                          )
                        }
                      >
                        Dedicated workspace
                      </Checkbox>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item name="Smoke alarm">
                      <Checkbox
                        checked={filterState.allCheckboxValues["Smoke alarm"]}
                        onChange={(e) =>
                          handleCheckboxChange(e.target.checked, "Smoke alarm")
                        }
                      >
                        Smoke alarm
                      </Checkbox>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item name="Pool">
                      <Checkbox
                        checked={filterState.allCheckboxValues["Pool"]}
                        onChange={(e) =>
                          handleCheckboxChange(e.target.checked, "Pool")
                        }
                      >
                        Pool
                      </Checkbox>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item name="Beachfront">
                      <Checkbox
                        checked={filterState.allCheckboxValues["Beachfront"]}
                        onChange={(e) =>
                          handleCheckboxChange(e.target.checked, "Beachfront")
                        }
                      >
                        Beachfront
                      </Checkbox>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </div>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <button id="clearAll" onClick={() => allClearFilter()}>
            Clear All
          </button>
          <Button
            id="showAllFilter"
            onClick={() => {
              handleToggleFilterModal();
              console.log(checkboxValues);
              props.filter(
                filterState.sliderValue[0],
                filterState.sliderValue[1],
                filterState.bedsActive,
                filterState.roomsActive,
                filterState.bathroomsActive,
                checkboxValues
              );
            }}
          >
            Show homes
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}