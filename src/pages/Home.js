import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function Home() {
  return (
    <div>
      <Container maxWidth="lg">
        <Typography variant="h4">Home Page</Typography>
        <br /> <Typography variant="h6">Fake Store API</Typography>
        <Typography variant="h6">
          This is a fake store API. It is used to test the application.
        </Typography>
        <Typography variant="h6">
          The API is not real and it is not meant to be used in production.
          Dummy data is used to test the application. https://fakestoreapi.com/
        </Typography>
      </Container>
    </div>
  );
}

export default Home;
