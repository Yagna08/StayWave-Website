import React from "react";
import { MdOutlineClose } from "react-icons/md"
import { Col, Modal, Row, Button } from "react-bootstrap";
import { AiFillStar } from 'react-icons/ai';
import ProgressBar from 'react-bootstrap/ProgressBar';
// import { Button } from '@mui/material'

export default function ReviewModal (props){

    return(
        <Modal
            dialogClassName="modal-90w"
            className={`modal ${props.review ? 'slide-up' : ''}`}
            show={props.review}
            onHide={() => props.updateReview()}
            // dialogClassName="modal-100w"
            aria-labelledby="example-custom-modal-styling-title"
            animation={true}
            scrollable={true}
          >
            <Modal.Header>
              <Modal.Title id="example-custom-modal-styling-title">
                <Button className="btn-close" onClick={() => props.updateReview()} variant=""></Button>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col xs="5">
                  <h5 className='fw-bold'>
                    <span className="d-flex">
                    {props.hotel.reviewDetailsInterface.reviewCount > 3 &&
                      <span className="d-flex"><AiFillStar className="me-2 mb-1" /> <span>{props.hotel.stars}</span>&nbsp;·&nbsp;</span>} <span>{props.hotel.reviews.length} reviews</span></span></h5>
                  {props.hotel.reviewDetailsInterface.reviewCount > 3 && <div>
                    {props.hotel.reviewDetailsInterface.reviewSummary.map((item) => {
                      return (
                        <div>
                          <Row className='main ratings p-1'>
                            <Col xs='4'>
                              <span>
                                {item.label}
                              </span>
                            </Col>
                            <Col xs='6'>
                              <span Container="pro"
                                style={{ justifyContent: 'flex-end', display: 'flex' }}
                              >
                                <ProgressBar now={item.percentage * 100} className='progress' />
                              </span>
                            </Col>
                            <Col xs='2'>
                              <strong>{item.localizedRating}</strong>
                            </Col>
                          </Row>
                        </div>
                      )
                    })}
                  </div>}
                </Col>
                <Col xs="7" className='p-0'>
                  {props.hotel.reviews.map((i) => {
                    const formattedComment = i.comments ? i.comments.replace(/<br\/>/g, "\n") : "";
                    return (
                      <div>
                        <div className="flex-column author pt-3 pb-3">
                          <div className="d-flex">
                            <img className="Rimage"
                              src={i.author.thumbnailUrl} height={10} alt='none' />
                              {console.log(i.author.thumbnailUrl)}
                            <div className="flex-column">
                              <div className="Rname">{i.author.firstName}</div>
                              <div className="Rdate">{i.localizedDate}</div>
                            </div>
                          </div>
                          <div class="des">
                            {formattedComment.split("\n").map((comment, index) => (
                              <div key={index}>{comment}</div>
                            ))}
                          </div>
                        </div>
                        {i.response && <div className="flex-column author ms-4 p-3">
                          <div className="d-flex">
                            <img className="Rimage"
                              src={i.recipient.thumbnailUrl} height={10} alt='none' />
                            <div className="flex-column">
                              <div className="Rname">Response from {i.recipient.firstName}</div>
                              <div className="Rdate">{i.localizedDate}</div>
                            </div>
                          </div>
                          <div class="des">
                            {i.response}
                          </div>
                        </div>}
                      </div>
                    )
                  })}
                </Col>
              </Row>
            </Modal.Body>
          </Modal>
    )
}