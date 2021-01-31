import React, { useState } from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";

const TodoDatePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleChange = (event, picker) => {
    console.log(event.target.value);
    console.log(picker.startDate);
    setStartDate(picker.startDate);
    setEndDate(picker.endDate);
  };

  return (
    <>
      <DateRangePicker
        onEvent={handleChange}
        initialSettings={{ startDate: "1/1/2021", endDate: "31/1/2021" }}
      >
        <button type="button" className="btn btn-primary">
          날짜 조회
        </button>
      </DateRangePicker>
      <div>
        <input type="text" value={startDate} />
        <input type="text" value={endDate} />
      </div>
    </>
  );
};

export default TodoDatePicker;
