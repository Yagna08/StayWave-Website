import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
export default function Calendar(props) {

  const ExampleCustomInput = ({ value, onClick }) => (
    <button className="example-custom-input" onClick={onClick}>
      <div>{props.btnName}</div>
      {value}
    </button>
  );

  const handleDateChange = (date) => {
    props.setDate(date);
  };

  return (
    <div>
      <DatePicker
        selected={props.date}
        onChange={handleDateChange}
        minDate={props.minDate}
        customInput={<ExampleCustomInput />}
        open={props.open}
      />
    </div>
  );
}
