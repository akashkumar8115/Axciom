import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const generateReport = createAsyncThunk(
    'reports/generate',
    async (reportConfig) => {
        // API call implementation
        const response = await fetch('/api/reports', {
            method: 'POST',
            body: JSON.stringify(reportConfig)
        });
        return response.json();
    }
);

const reportSlice = createSlice({
    name: 'reports',
    initialState: {
        data: null,
        status: 'idle',
        error: null
    },
    reducers: {
        clearReport: (state) => {
            state.data = null;
            state.status = 'idle';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(generateReport.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(generateReport.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(generateReport.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const { clearReport } = reportSlice.actions;
export default reportSlice.reducer;
