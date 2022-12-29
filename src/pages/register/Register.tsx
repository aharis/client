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
<<<<<<< HEAD:src/pages/Register.tsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { register, reset } from '../featured/auth/authSlice';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
    address: '',
    zipcode: '',
    discount: false,
  });

  const { username, email, password, password2, address, zipcode, discount } = formData;

   const navigate = useNavigate();
  const dispatch = useAppDispatch();

   const { user, isLoading, isError, isSuccess, message } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate('/');
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e: any) => {
    if (e.target.name === 'discount') {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const onSubmit = (e: any) => {
    if (password !== password2) {
       toast.error('Passwords do not match');
    } else {
      const userData = {
        username,
        email,
        password,
        address,
        zipcode,
        discount
      };
       dispatch(register(userData));
    }
  };

=======
import { useStyles } from './styles'

const Register = () => {
  const classes = useStyles();
>>>>>>> develop:src/pages/register/Register.tsx
  return (
    <Card className={classes.root}>
          <CardContent>
        <Typography gutterBottom variant='h4' align='center'>
          Register
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label='Username'
              variant='outlined'
              fullWidth
              name='username'
              value={username}
              onChange={onChange}
            />
          </Grid>
          <Grid xs={12} item>
            <TextField
              label='Email'
              variant='outlined'
              fullWidth
              name='email'
              value={email}
              onChange={onChange}
            />
          </Grid>
          <Grid xs={12} item>
            <TextField
              label='Password'
              variant='outlined'
              fullWidth
              name='password'
              value={password}
              onChange={onChange}
            />
          </Grid>
          <Grid xs={12} item>
            <TextField
              label='Retype Password'
              variant='outlined'
              fullWidth
              name='password2'
              value={password2}
              onChange={onChange}
            />
          </Grid>
          <Grid xs={12} item>
            <TextField
              label='Address'
              variant='outlined'
              fullWidth
              name='address'
              value={address}
              onChange={onChange}
            />
          </Grid>
          <Grid xs={12} item>
            <TextField
              label='Zip Code'
              variant='outlined'
              fullWidth
              name='zipcode'
              value={zipcode}
              onChange={onChange}
            />
          </Grid>
        </Grid>
        <FormControlLabel
          control={<Checkbox />}
          label='I want to be a remember to receive additional discounts'
          name='discount'
          value={discount}
          onChange={onChange}
        />

        <Box textAlign='center'>
          <Button variant='outlined' onClick={onSubmit}>
            Sign In
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Register;
