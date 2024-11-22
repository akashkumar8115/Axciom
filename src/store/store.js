import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import membershipReducer from './membershipSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        memberships: membershipReducer,
    },
});
