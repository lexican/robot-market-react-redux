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
        addToCart: (state, action) => {
            const itemInCart = state.cartItems.find((cart) => cart.name.toLowerCase() === action.payload.name.toLowerCase())
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 })
            }
        }
        // omit existing reducers here
    },
})

export default cartSlice.reducer;
export const {addToCart} = cartSlice.actions;

export const cartItems = (state: RootState) => state.cart.cartItems;
