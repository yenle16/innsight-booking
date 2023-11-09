import { combineReducers } from 'redux';


import HomeReducer from "@/redux/home/slice"
const rootReducer = combineReducers({
    Home: HomeReducer,

});

export default rootReducer;