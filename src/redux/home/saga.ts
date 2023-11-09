import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import actions from './action';
import { result, getHotel } from './slice';  // Assuming getHotel is imported from your slice

import { Hotel, getHotelById, searchHotels } from '@/api/apiCore';

interface WatchGetHotelAction {
  type: typeof actions.GET_HOTEL;
  payload: {
    hotelId: string;
  };
}

interface WatchSearchHotelAction {
  type: typeof actions.SEARCH_HOTELS;
  payload: {
    filter: {
      destination: string;
      date: {
        startDate: Date;
        endDate: Date;
      };
      options: {
        adult: number;
        children: number;
        room: number;
      };
    };
  };
}

// Define the response type of getHotelById
interface GetHotelResponse {
  Data: Hotel;  // Assuming Hotel is the type of your hotel data
}

// function* watchGetHotel(action: PayloadAction<WatchGetHotelAction['payload']>): Generator<any, void, any> {
//   const { hotelId } = action.payload;
//   try {
//     // Specify the type of response for better type inference
//     const response: GetHotelResponse = yield call(getHotelById, hotelId);
//     if (response?.Data) {
//       yield put(getHotel(response?.Data));
//     }
//   } catch (error) {
//     // Handle error
//   } finally {
//     // Cleanup logic if needed
//   }
// }

function* watchSearchHotel(action: PayloadAction<WatchSearchHotelAction['payload']>): Generator<any, void, any> {
  const { filter } = action.payload;
  console.log('filter', filter);
  try {
    // Specify the type of response for better type inference
    const response: GetHotelResponse = yield call(searchHotels, filter);
    console.log(response);
    if (response?.Data) {
      yield put(result(response?.Data));
    }
  } catch (error) {
    // Handle error
  }
}

// export default function* HomeSaga(): Generator<any, void, any> {
//   yield all([
//     fork(takeEvery, actions.GET_HOTEL, watchGetHotel),
//     fork(takeEvery, actions.SEARCH_HOTELS, watchSearchHotel),
//   ]);
// }
