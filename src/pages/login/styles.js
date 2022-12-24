import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    margin: "100px auto",
    maxWidth: "500px",
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `center`,
    alignItems: "center",
  },
  typography: {    
    textAlign: "center",
  },
  textField: {
    variant: "outlined",
  },
  link: {
    textDecoration: "none !important",
  }, 
  button: {
    marginTop: '10px !important'
  }
});
