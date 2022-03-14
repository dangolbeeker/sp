import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'Post',
  initialState,
  reducers: {
    
    addPost: (state, action) => {
      state.value += action.payload
    },
    editPost: (state, action) => {
        state.value += action.payload
    },
    deletePost: (state, action) => {
        state.value += action.payload
    },

  },
})

// Action creators are generated for each case reducer function
export const { add, edit, delete } = postSlice.actions

export default postSlice.reducer