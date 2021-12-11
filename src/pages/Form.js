import { React, useReducer } from "react";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Reducerex from "../components/context/Reducerex";
import RefEx from "../components/context/RefEx";
import Child from "../components/context/Child";
import { forwardRef, useRef, useImperativeHandle } from "react";
import Child2 from "../components/context/Child2";

function Form() {
  const childRef = useRef();
 

  const validate =
    ({ name: "required", message: "Name is required" },
    { surName: "required", message: "Surname is required" },
    { email: "required", message: "Email is required" });

  const clickHandler = () => {
    alert("object");
  }

  return (
    <> 
      <Child2 clickHandler={clickHandler}  />
      <Child ref={childRef} />
   
      <button
        onClick={() => {
          childRef.current.showAlert();
        }}
      >
        Click me
      </button>
      <button
        onClick={() => {
          childRef.current.Increment();
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          childRef.current.Decrement();
        }}
      >
        Decrement
      </button>
      <Typography variant="h4">Form Outline</Typography>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <div>
        <TextField
          error
          id="outlined-error"
          label="Error"
          defaultValue="Hello World"
        />
        <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />
        <Button variant="contained">Contained</Button>

        <Reducerex />
      


        <RefEx />
      </div>
    </>
  );
}

export default Form;
