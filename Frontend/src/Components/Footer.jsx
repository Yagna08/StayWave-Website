import React, { Fragment, useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { FaCity } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import "../Styles/Footer.css";
import { Link } from "react-router-dom";
import { MdKeyboardArrowUp } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

export default function Footer() {
    const [show, setShow] = useState(false);
    const [support, setSupport] = useState(false);

    return (
        <Fragment>
            <div className="footer p-1">
                    <div className="flex-container">
                        <div className="flex-item-left">
                            <span>© {new Date().getFullYear()} Airbnb, Inc.</span>
                            <span className="ms-1">·</span>
                            <span className="ms-1">
                                <span className="ms-1 underline">Privacy</span>
                                <span className="ms-1">·</span>
                                <span className="ms-1 underline">Terms</span>
                                <span className="ms-1">·</span>
                                <span
                                    onClick={() => setShow(true)}
                                    variant=""
                                    className="ms-1 underline"
                                >
                                    Destination
                                </span>
                                <Modal
                                    className="modal-bottom"
                                    show={show}
                                    onHide={() => setShow(false)}
                                    dialogClassName="modal-100w"
                                    aria-labelledby="example-custom-modal-styling-title"
                                    animation={true}
                                >
                                    <Modal.Header>
                                        <Modal.Title id="example-custom-modal-styling-title">
                                            <button
                                                className="btn btn-close me-2 mb-0"
                                                onClick={() => setShow(false)}
                                                variant="light"
                                            >
                                                <MdOutlineClose />
                                            </button>
                                            Cities
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Row>
                                            <Col>
                                                <ul className="list-modal">
                                                    <li className="mt-2 mb-3">
                                                        <Container>
                                                            <FaCity className="ms-2 me-2" />
                                                            Ahmedabad
                                                        </Container>
                                                    </li>
                                                    <li className="mt-2 mb-3">
                                                        <Container>
                                                            <FaCity className="ms-2 me-2" />
                                                            Kolkata
                                                        </Container>
                                                    </li>
                                                    <li className="mt-2 mb-3">
                                                        <Container>
                                                            <FaCity className="ms-2 me-2" />
                                                            Kolkata
                                                        </Container>
                                                    </li>
                                                </ul>
                                            </Col>
                                            <Col>
                                                <ul className="list-modal">
                                                    <li className="mt-2 mb-3">
                                                        <Container>
                                                            <FaCity className="ms-2 me-2" />
                                                            Ahmedabad
                                                        </Container>
                                                    </li>
                                                    <li className="mt-2 mb-3">
                                                        <Container>
                                                            <FaCity className="ms-2 me-2" />
                                                            Kolkata
                                                        </Container>
                                                    </li>
                                                    <li className="mt-2 mb-3">
                                                        <Container>
                                                            <FaCity className="ms-2 me-2" />
                                                            Kolkata
                                                        </Container>
                                                    </li>
                                                </ul>
                                            </Col>
                                            <Col>
                                                <ul className="list-modal">
                                                    <li className="mt-2 mb-3">
                                                        <Container>
                                                            <FaCity className="ms-2 me-2" />
                                                            Ahmedabad
                                                        </Container>
                                                    </li>
                                                    <li className="mt-2 mb-3">
                                                        <Container>
                                                            <FaCity className="ms-2 me-2" />
                                                            Kolkata
                                                        </Container>
                                                    </li>
                                                    <li className="mt-2 mb-3">
                                                        <Container>
                                                            <FaCity className="ms-2 me-2" />
                                                            Kolkata
                                                        </Container>
                                                    </li>
                                                </ul>
                                            </Col>
                                        </Row>
                                    </Modal.Body>
                                </Modal>
                            </span>
                        </div>
                        <div className="flex-item-right">
                            <span>
                                <span className="underline">
                                    <TbWorld  className="d-inline" />{" "}
                                <span>English (IN)</span>  
                            </span>
                            &nbsp;&nbsp;&nbsp;
                                <span
                                    onClick={() => setSupport(true)}
                                    variant="light"
                                    className="underline"
                                >
                                    Support & Resources
                                </span>

                                <Modal
                                    className="modal-bottom"
                                    show={support}
                                    onHide={() => setSupport(false)}
                                    dialogClassName="modal-100w"
                                    aria-labelledby="example-custom-modal-styling-title"
                                    animation={true}
                                >
                                    <Modal.Header>
                                        <Modal.Title id="example-custom-modal-styling-title">
                                            <Button
                                                className="close-btn"
                                                onClick={() => setSupport(false)}
                                                variant=""
                                            >
                                                <MdOutlineClose />
                                            </Button>
                                            Support & Resources
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Row>
                                            <Col>
                                                <Container>
                                                    Airbnb, Inc. is an American San Francisco-based
                                                    company operating an online marketplace for short- and
                                                    long-term homestays and experiences. The company was
                                                    founded in 2008 by Brian Chesky, Nathan Blecharczyk,
                                                    and Joe Gebbia.
                                                </Container>
                                            </Col>
                                            <Col>
                                                <ul className="list-modal">
                                                    <li className="mt-2 mb-3">
                                                        <Container>
                                                            <Link to="/home" />
                                                        </Container>
                                                    </li>
                                                    <li className="mt-2 mb-3">
                                                        <Container>
                                                            <FaCity className="ms-2 me-2" />
                                                            Kolkata
                                                        </Container>
                                                    </li>
                                                    <li className="mt-2 mb-3">
                                                        <Container>
                                                            <FaCity className="ms-2 me-2" />
                                                            Kolkata
                                                        </Container>
                                                    </li>
                                                </ul>
                                            </Col>
                                            <Col>
                                                <ul className="list-modal">
                                                    <li className="mt-2 mb-3">
                                                        <Container>
                                                            <FaCity className="ms-2 me-2" />
                                                            Ahmedabad
                                                        </Container>
                                                    </li>
                                                    <li className="mt-2 mb-3">
                                                        <Container>
                                                            <FaCity className="ms-2 me-2" />
                                                            Kolkata
                                                        </Container>
                                                    </li>
                                                    <li className="mt-2 mb-3">
                                                        <Container>
                                                            <FaCity className="ms-2 me-2" />
                                                            Kolkata
                                                        </Container>
                                                    </li>
                                                </ul>
                                            </Col>
                                        </Row>
                                    </Modal.Body>
                                </Modal>
                            </span>
                        </div>
                    </div>
                </div>
        </Fragment>
    );
}
