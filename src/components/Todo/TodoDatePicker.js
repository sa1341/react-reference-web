import { Button } from "@material-ui/core";
import React from "react";
import { Form } from "react-bootstrap";

const TodoDatePicker = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <Form.Group controlId="dob">
            <Form.Label>조회할 날짜를 선택하세요.</Form.Label>
            <Form.Control
              type="date"
              name="dob"
              placeholder="Date of Birth"
              onChange={handleChange}
            />
            <Button
              variant="contained"
              color="primary"
              type="button"
              style={{ padding: "0", marginLeft: "-50" }}
            >
              조회
            </Button>
          </Form.Group>
        </div>
      </div>
    </div>
  );
};

export default TodoDatePicker;
