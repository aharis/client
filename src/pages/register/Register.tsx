import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { useStyles } from './styles'

const Register = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
          <CardContent>
        <Typography gutterBottom variant='h4' align='center'>
          Register
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField label='Username' variant='outlined' fullWidth />
          </Grid>
          <Grid xs={12} item>
            <TextField label='Email' variant='outlined' fullWidth />
          </Grid>
          <Grid xs={12} item>
            <TextField label='Password' variant='outlined' fullWidth />
          </Grid>
          <Grid xs={12} item>
            <TextField label='Retype Password' variant='outlined' fullWidth />
          </Grid>
          <Grid xs={12} item>
            <TextField label='Address' variant='outlined' fullWidth />
          </Grid>
          <Grid xs={12} item>
            <TextField label='Zip Code' variant='outlined' fullWidth />
          </Grid>
        </Grid>
        <FormControlLabel
          control={<Checkbox />}
          label='I want to be a remember to receive additional discounts'
        />

        <Box textAlign='center'>
          <Button variant='outlined'>Sign In</Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default Register
