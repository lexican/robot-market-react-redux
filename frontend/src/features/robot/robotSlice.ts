import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../app/store';

export interface IRobot {
    name: string;
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
    filteredRobots: IRobot[];
    status: 'idle' | 'loading' | 'failed';
    error: string;
}

export const fetchRobots = createAsyncThunk('/api', async () => {
    const response = await axios.get('/api/robots')
    return response.data
})


const initialState: RobotState = {
    robots: [],
    filteredRobots: [],
    status: 'idle',
    error: ''
};

const robotsSlice = createSlice({
    name: 'robots',
    initialState,
    reducers: {
        filterRobots: (state, action) => {
            const filteredRobots = state.robots.filter((robot) =>
                robot.name.toLowerCase().includes(action.payload.toLowerCase())
            );
            state.filteredRobots = action.payload.length > 0 ? filteredRobots : [...state.robots]
        }
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
                state.filteredRobots = state.filteredRobots.concat(action.payload.data)
            })
            .addCase(fetchRobots.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message ?? ''
            })
    }
})

export default robotsSlice.reducer;

export const { filterRobots } = robotsSlice.actions;

export const selectAllFilteredRobots = (state: RootState) => state.robot.filteredRobots;

export const robotsLoadingStatus = (state: RootState) => state.robot.status;