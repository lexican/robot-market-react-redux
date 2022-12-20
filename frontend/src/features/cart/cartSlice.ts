import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { IRobot } from '../robot/robotSlice'

interface ICartState {
    cartItems: IRobot[];
    total: number;
    isShowCart: boolean;
}

const initialState: ICartState = {
    cartItems: [],
    total: 0,
    isShowCart: false
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
                    const cartItems = state.cartItems.filter((cart) => cart.name.toLowerCase() !== action.payload.name.toLowerCase())
                    state.cartItems = cartItems
                }

            }
        },

        toggleIsShowCart: (state, action) => {
            state.isShowCart = action.payload;
        }
    },
})

export default cartSlice.reducer;
export const { addToCart, incrementQuantity, decrementQuantity, toggleIsShowCart } = cartSlice.actions;

export const cartItems = (state: RootState) => state.cart.cartItems;
export const isShowCart = (state: RootState) => state.cart.isShowCart;
