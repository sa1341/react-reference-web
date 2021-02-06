import { Button } from "@material-ui/core";
import React from "react";
import { Form } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  todoDatePicker_wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const TodoDatePicker = () => {
  const classes = useStyles();

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className={classes.todoDatePicker_wrapper}>
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
              color="secondary"
              type="button"
              className={classes.button}
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
