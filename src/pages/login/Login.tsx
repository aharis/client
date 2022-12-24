import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useStyles } from "./styles";

const Login = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.typography} variant="h4" gutterBottom >
          Login
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Username"
              className={classes.textField}
              fullWidth
            />
          </Grid>
          <Grid xs={12} item>
            <TextField
              label="Password"
              className={classes.textField}
              fullWidth
            />
          </Grid>
        </Grid>

        <Link href="/register" className={classes.link}>
          Don't have an account? Register by clicking here!
        </Link>
        <Box textAlign="center">
          <Button variant="outlined" className={classes.button}>Log In</Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Login;
