// src/App.js
import React from "react";
import { CssBaseline, Container, Box, Grid } from "@mui/material";
import Header from "./components/Header";
import ProductListing from "./Pages/ProductListing";
import FooterComponent from "./utils/FooterComponent";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg">
        <Box mt={4}>
          <ProductListing />
        </Box>
      </Container>
      <FooterComponent/>
    </>
  );
}

export default App;
