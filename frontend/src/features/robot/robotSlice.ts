import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState, AppThunk } from '../../app/store';

export interface IRobot {
    name: number;
    image: string;
    price: number;
    stock: number;
    createdAt: string;
    material: string;
    quantity: number;
    totalPrice: number;
};

export interface RobotState {
    robots: IRobot[];
    status: 'idle' | 'loading' | 'failed';
    error: string;
}

export const fetchRobots = createAsyncThunk('/api', async () => {
    const response = await axios.get('/api/robots')
    return response.data
})


const initialState: RobotState = {
    robots: [],
    status: 'idle',
    error: ''
};

const robotsSlice = createSlice({
    name: 'robots',
    initialState,
    reducers: {
        // omit existing reducers here
    },
    extraReducers(builder) {
        builder
            .addCase(fetchRobots.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchRobots.fulfilled, (state, action) => {
                state.status = 'idle'
                // Add any fetched posts to the array
                state.robots = state.robots.concat(action.payload.data)
            })
            .addCase(fetchRobots.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message ?? ''
            })
    }
})

export default robotsSlice.reducer;

export const selectAllRobots = (state: RootState) => state.robot.robots;

