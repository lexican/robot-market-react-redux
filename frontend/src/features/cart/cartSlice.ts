import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { IRobot } from '../robot/robotSlice'

interface ICartState {
    cartItems: IRobot[];
    total: number;
}

const initialState: ICartState = {
    cartItems: [],
    total: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // omit existing reducers here
    },
})

export default cartSlice.reducer;

export const cartItems = (state: RootState) => state.cart.cartItems;
