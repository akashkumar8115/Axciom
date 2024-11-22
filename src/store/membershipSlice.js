import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { membershipService } from '../services/api';

export const fetchMemberships = createAsyncThunk(
    'memberships/fetchAll',
    async () => {
        const response = await membershipService.getAll();
        return response.data;
    }
);

const membershipSlice = createSlice({
    name: 'memberships',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMemberships.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMemberships.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchMemberships.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default membershipSlice.reducer;
