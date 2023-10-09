import React from "react";
import GoogleMapReact from 'google-map-react';
import { ImLocation } from 'react-icons/im'
import { FaHome } from 'react-icons/fa'

const AnyReactComponent = () => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M12 2a7.008 7.008 0 0 0-7 7c0 5.353 6.036 11.45 6.293 11.707l.707.707.707-.707C12.964 20.45 19 14.353 19 9a7.008 7.008 0 0 0-7-7zm0 16.533C10.471 16.825 7 12.553 7 9a5 5 0 0 1 10 0c0 3.546-3.473 7.823-5 9.533z" /><path d="M12 6a3 3 0 1 0 3 3 3 3 0 0 0-3-3zm0 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" />
        </svg> */}
        <ImLocation size={35} color="rgb(255, 255, 255)" />
        {/* <h1>DELHI</h1> */}
    </div>
);

export default function Google(props) {
    const defaultProps = {
        center: {
            lat: props.lat,
            lng: props.lng,
        },
        zoom: 19
    };

    return (
        <div style={{ height: '70vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }} // Replace with your Google Maps API key
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={props.lat}
                    lng={props.lng}
                />
            </GoogleMapReact>
        </div>
    );
}