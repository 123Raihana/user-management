import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/reducer/authReducer';
import userReducer from '../redux/reducer/userReducer';
const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;