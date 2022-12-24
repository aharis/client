import React from "react";
import { Box, Grid } from "@mui/material";
import HomeImage from "../assets/world-book-day-scaled.jpg";

const Home = () => {
  return (
    <Box>
      <Grid container xs={12} md={8} sx={{ mt: "4rem" }} m={"auto"}>
        <img src={HomeImage} alt='HomeImage' style={{ width: "100vw", height: "90vh" }} />
      </Grid>
    </Box>
  ); // should be book image and some other ddetails.
  //and this page should be first what user see, after login redirect wher should redirect
};

export default Home;
