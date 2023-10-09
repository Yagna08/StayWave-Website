import React from 'react'
import '../Styles/NoDataFound.css' 
import nodata from "../Images/animation_ln23am5b_small.gif";
const NoDataFound = () => {
  return (
    <div className="noDataFound">
      <img src={nodata} alt="my-gif" className="ms-4"/>
      <h2>There were no Hotels discovered.</h2>
    </div>
  );
}

export default NoDataFound
