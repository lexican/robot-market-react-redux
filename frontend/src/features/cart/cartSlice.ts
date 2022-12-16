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
        },

        incrementQuantity: (state, action) => {
            const itemInCart = state.cartItems.find((cart) => cart.name.toLowerCase() === action.payload.name.toLowerCase())
            if (itemInCart) {
                itemInCart.quantity++;
            }
        },

        decrementQuantity: (state, action) => {
            const itemInCart = state.cartItems.find((cart) => cart.name.toLowerCase() === action.payload.name.toLowerCase())
            if (itemInCart) {
                if (itemInCart.quantity > 1) {
                    itemInCart.quantity--;
                } else {
                    const cartItems = state.cartItems.filter((cart) => cart.name.toLowerCase() != action.payload.name.toLowerCase())
                    state.cartItems = cartItems
                }

            }
        }
    },
})

export default cartSlice.reducer;
export const { addToCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

export const cartItems = (state: RootState) => state.cart.cartItems;
