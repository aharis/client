import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';
import type { RootState } from '../../app/store';
import { IUser } from '../../utils/interfaces';

// Define a type for the slice state
interface UserState {
  user: IUser;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string | any;
}

//Get user from localstorage
// const user= JSON.parse(localStorage.getItem('user') || '');

const initialState: UserState = {
  user: {
    username: '',
    role: '',
    result: ''
  },
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

//Register user
export const register = createAsyncThunk('auth/register', async (user: string, thunkAPI) => {
  try {
    return await authService.register(user);
  } catch (error: boolean | any) {
    const message =
      (error.response && error.response.data && error.response.data.result.message[0].message) ||
      error.response.data.result.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

//Login user
export const login = createAsyncThunk('auth/login', async (user: string, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error: boolean | any) {
    const message =
      (error.response && error.response.data && error.response.data.result.loginMessage) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout();
});

export const authSlice = createSlice({
  name: 'auth',
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
      //register
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = {
          username: '',
          role: '',
          result: '',
        };
      })
      //login
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = {
          username: '',
          role: '',
          result: '',
        };
      })
      //logout
      .addCase(logout.fulfilled, (state) => {
        state.user = {
          username: '',
          role: '',
          result: '',
        };
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
