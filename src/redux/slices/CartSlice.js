import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: () => {},
    removeFromCart: () => {},
  },
})

export const { addToCart, removeFromCart } = CartSlice.actions
export default CartSlice.reducer
