import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HomeState {
  result: any;
  hotel: any;
  room: any;
  message: string;
}

const initialState: HomeState = {
  result: {},
  hotel: {},
  room: {},
  message: 'halo',
};

const homeSlice = createSlice({
  name: 'HOME',
  initialState,
  reducers: {
    result: (state, action: PayloadAction<any>) => {
      state.result = action.payload;
    },
    getHotel: (state, action: PayloadAction<any>) => {
      state.hotel = action.payload;
    },
  },
});

export const { result, getHotel } = homeSlice.actions;

export default homeSlice.reducer;
