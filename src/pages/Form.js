import React from "react";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Button from '@mui/material/Button';

function Form() {
  const validate= (
    {name: "required", message: "Name is required"},
    {surName: "required", message: "Surname is required"},
    {email: "required", message: "Email is required"}
  );

  return (
    <>
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

      </div>
    </>
  );
}

export default Form;
