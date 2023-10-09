import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import "../Styles/Detail.css"

export default function DescModel(props) {
    return (
        <Modal
            dialogClassName="modal-80w"
            show={props.isOpen}
            id='loginModal'
            aria-labelledby="contained-modal-title-vcenter"
            centered={true}
            scrollable={true}
        >
            <Modal.Header>
                <button type="button" class="btn-close" aria-label="Close" onClick={props.toggle}></button>
            </Modal.Header>
            <Modal.Body>
                <div className='container p-4 pb-0'>
                    <h3>About This Place</h3>
                    {props.hotel.sectionedDescription.description.split('\n\n')[0]}</div>
                {props.hotel.sectionedDescription.space && <div className='container ps-4 pe-4 pt-4'><h6>The Space</h6>
                    {props.hotel.sectionedDescription.space}</div>}
                {props.hotel.sectionedDescription.access && <div className='container ps-4 pe-4 pt-4'>
                    <h6>Guest Acccess</h6>
                    {props.hotel.sectionedDescription.access}
                </div>}
                
            </Modal.Body>

        </Modal>

    );
};