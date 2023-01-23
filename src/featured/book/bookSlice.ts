import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IBook } from '../../utils/interfaces';
import bookService from './bookService';

// Define a type for the slice state
interface BookState {
  book: IBook;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string | any;
}

const initialState: BookState = {
  book: {
    title: '',
    author: '',
    price: 0,
    stock: 0,
    reorder_notification: 0,
  },
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

//Add new book
export const addBook = createAsyncThunk('book/new-book', async (book: IBook, thunkAPI) => {
  try {
    return await bookService.addBook(book);
  } catch (error: boolean | any) {
    const message =
      (error.response && error.response.data && error.response.data.result.message[0].message) ||
      error.response.data.result.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      //add book
      .addCase(addBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.book = action.payload;
      })
      .addCase(addBook.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.book = { title: '', author: '', price: 0, stock: 0, reorder_notification: 0 };
      });
  },
});

export const { reset } = bookSlice.actions;
export default bookSlice.reducer;
