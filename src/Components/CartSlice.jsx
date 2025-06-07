import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItem: [],
};
const CartSlice = createSlice({
    name: 'cart',
    initialState, 
    reducers: {
        addItemToCart(state, action) {
            const existingItem = state.cartItem.find(item => item.id ===action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            }   else{
                state.cartItem.push({ ...action.payload, quantity: 1});
            }     
        }
    },
 });


