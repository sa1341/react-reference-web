import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import { useTodoDispatch } from "components/Todo/TodoContext";
import axios from "axios";

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
  const dispatch = useTodoDispatch();
  const [date, setDate] = useState(null);
  const handleChange = (e) => {
    setDate(e.target.value);
  };
  const onClick = async () => {
    try {
      const response = await axios.get(`/api/v1/todos/${date}`);
      console.log(response);
      dispatch({ type: "TodoDatePicker", todo: response.data });
    } catch (e) {
      console.log(e);
    }
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
              onClick={onClick}
              variant="contained"
              color="secondary"
              type="button"
              className={classes.button}
            >
              조회
            </Button>
          </Form.Group>
          <h2>{date}</h2>
        </div>
      </div>
    </div>
  );
};

export default TodoDatePicker;
