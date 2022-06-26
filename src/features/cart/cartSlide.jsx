import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://course-api.com/react-useReducer-cart-project";
export const getItems = createAsyncThunk(
    "cart/getItems",
    async (name, thunckAPI) => {
        try {
            const res = await axios(url);
            return res.data;
        } catch (error) {
            return thunckAPI.rejectWithValue("something went wrong");
        }
    }
);
const initialState = {
    cartItems: [],
    total: 0,
    amount: 0,
    isLoading: true,
};

const cartSlide = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state, action) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter((cart) => {
                return cart.id !== action.payload;
            });
        },
        increase: (state, action) => {
            const cartItem = state.cartItems.find(
                (cart) => cart.id === action.payload.id
            );
            cartItem.amount += 1;
        },
        decrease: (state, action) => {
            const cartItem = state.cartItems.find(
                (cart) => cart.id === action.payload.id
            );
            cartItem.amount -= 1;
        },
        calculateTotals: (state, action) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        },
    },
    extraReducers: {
        [getItems.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getItems.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.cartItems = action.payload;
        },
        [getItems.rejected]: (state) => {
            state.isLoading = false;
        },
    },
});
export const { clearCart, removeItem, increase, decrease, calculateTotals } =
    cartSlide.actions;
export default cartSlide.reducer;
