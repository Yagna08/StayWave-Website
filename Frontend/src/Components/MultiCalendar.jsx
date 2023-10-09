import React, { useState, useEffect } from "react";
import { DateRangePicker } from "@progress/kendo-react-dateinputs";
import "@progress/kendo-theme-default/dist/all.css";
import "../Styles/DateRangePicker.css";

export default function MultiCalendar(props) {
  // Use local state to manage the selected date range
  const [selectedRange, setSelectedRange] = useState(props.value);

  useEffect(() => {
    calculateTotalDaysSelected();
  }, [selectedRange]);

  const calculateTotalDaysSelected = () => {
    const startDate = selectedRange.start;
    const endDate = selectedRange.end;

    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);

      const differenceInMilliseconds = Math.abs(end.getTime() - start.getTime());
      const totalDaysSelected = Math.ceil(
        differenceInMilliseconds / (1000 * 60 * 60 * 24)
      );

      props.updateTotalDays(totalDaysSelected);
      console.log(totalDaysSelected)
    } else {
      props.updateTotalDays(0);
    }
  };

  const handleChange = (event) => {
    setSelectedRange(event.value); // Update the local state immediately
    props.change(event.value);
  };

  useEffect(() => {
    setSelectedRange({ start: new Date(), end: null }); // Set the initial selected date range to today's date
  }, []);

  return (
    <div className="row">
      <div>
        <DateRangePicker
          value={selectedRange} // Use the local state for value
          onChange={handleChange}
          min={new Date()}
          ariaLabelledBy="hello"
        />
      </div>
    </div>
  );
}
