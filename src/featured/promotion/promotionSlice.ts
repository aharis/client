import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IPromotion, PromotionState } from '../../utils/interfaces';
import promotionService from './promotionService';

const initialState: PromotionState = {
  promotion: {
    percentage: 0,
    expiration_date: new Date(),
  },
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

//Add new promotion
export const addPromotion = createAsyncThunk(
  'promotion/new-promotion',
  async (promotion: IPromotion, thunkAPI) => {
    try {
      return await promotionService.addPromotion(promotion);
    } catch (error: boolean | any) {
      const message =
        (error.response && error.response.data && error.response.data.result.message[0].message) ||
        error.response.data.result.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const promotionSlice = createSlice({
  name: 'promotion',
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
      //add promotion
      .addCase(addPromotion.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addPromotion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.promotion = action.payload;
      })
      .addCase(addPromotion.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.promotion = { percentage: 0, expiration_date: new Date() };
      });
  },
});

export const { reset } = promotionSlice.actions;
export default promotionSlice.reducer;
