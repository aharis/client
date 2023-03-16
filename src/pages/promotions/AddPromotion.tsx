import { useState } from 'react';
import { Box, Card, CardContent, Grid, TextField, Typography, InputLabel } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import { useStyles } from '../books/styles';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useAppDispatch } from '../../app/hooks';
import SubmitButton from '../../components/submitButton/SubmitButton';
import { addPromotion } from '../../featured/promotion/promotionSlice';
import { IPromotion } from '../../utils/interfaces';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const AddPromotion = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<IPromotion>({
    percentage: 0,
    expiration_date: new Date(),
  });
  const { percentage, expiration_date } = formData;

  const onChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: any) => {
    const promotionData: any = {
      percentage,
      expiration_date,
    };
    dispatch(addPromotion(promotionData));
  };

  console.log(formData);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant='h4' className={classes.typography}>
          Add Promotion
        </Typography>
        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={3}>
            <InputLabel>Percentage Discount</InputLabel>
          </Grid>
          <Grid item xs={9}>
            <TextField
              label='Percentage Discount'
              variant='outlined'
              fullWidth
              name='percentage'
              required
              value={percentage !== 0 ? percentage : null}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={3}>
            <InputLabel>Expiration Date</InputLabel>
          </Grid>
          <Grid item xs={9}>
            <TextField
              label='Expiration Date'
              variant='outlined'
              fullWidth
              name='expiration_date'
              type='date'
              required
              value={expiration_date}
              onChange={onChange}
            />
          </Grid>
        </Grid>
        <Box textAlign='end'>
          <SubmitButton onClick={onSubmit}>Add</SubmitButton>
        </Box>
      </CardContent>
      <ToastContainer />
    </Card>
  );
};

export default AddPromotion;
