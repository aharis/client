import { Box, Grid } from "@mui/material";
import HomeImage from "../../assets/world-book-day-scaled.jpg";
import { useStyles } from "./styles";

const Home = () => {
  const classes = useStyles();
  return (
    <Box>
      <Grid container xs={12} md={8} className={classes.root}>
        <img src={HomeImage} alt='HomeImage' className={classes.image}/>
      </Grid>
    </Box>
  ); // should be book image and some other ddetails.
  //and this page should be first what user see, after login redirect wher should redirect
};

export default Home;
