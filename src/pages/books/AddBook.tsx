import { useState } from 'react';
import { Box, Card, CardContent, Grid, TextField, Typography, InputLabel } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import { useStyles } from './styles';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useAppDispatch } from '../../app/hooks';
import SubmitButton from '../../components/submitButton/SubmitButton';
import { addBook } from '../../featured/book/bookSlice';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

interface IBook {
  title: string;
  author: string;
  price: number;
  stock: number;
  reorder_notification: number;
}

const AddBook = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<IBook>({
    title: '',
    author: '',
    price: 0,
    stock: 0,
    reorder_notification: 0,
  });
  const { title, author, price, stock, reorder_notification } = formData;

  const onChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: any) => {
    const bookData: any = {
      title,
      author,
      price,
      stock,
      reorder_notification,
    };
    dispatch(addBook(bookData));
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant='h4' className={classes.typography}>
          Add Item to Book Store
        </Typography>
        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={3}>
            <InputLabel>Title</InputLabel>
          </Grid>
          <Grid item xs={9}>
            <TextField
              label='Title'
              variant='outlined'
              fullWidth
              name='title'
              required
              value={title}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={3}>
            <InputLabel>Author</InputLabel>
          </Grid>
          <Grid item xs={9}>
            <TextField
              label='Author'
              variant='outlined'
              fullWidth
              name='author'
              required
              value={author}
              onChange={onChange}
            />
          </Grid>

          <Grid item xs={3}>
            <InputLabel>Price</InputLabel>
          </Grid>
          <Grid item xs={3}>
            <TextField
              label='Price'
              variant='outlined'
              name='price'
              required
              value={price}
              onChange={onChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={3}>
            <InputLabel>Stock</InputLabel>
          </Grid>
          <Grid item xs={3}>
            <TextField
              label='Stock'
              variant='outlined'
              name='stock'
              required
              value={stock}
              onChange={onChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={3}>
            <InputLabel>Reorder Notification</InputLabel>
          </Grid>
          <Grid item xs={3}>
            <TextField
              label='Reorder Notification'
              variant='outlined'
              name='reorder_notification'
              required
              value={reorder_notification}
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

export default AddBook;
