import { createSlice } from '@reduxjs/toolkit'

const initialState = {
postImage: [],
postBody: [],
postStatus: [],
}

export const counterSlice = createSlice({
  name: 'Post',
  initialState,
  reducers: {
    
    addPost(state, action) {
        state.isLoading = false;
        state.addPost = action.payload;
    },
    editPost(state, action) {
        state.isLoading = false;
        state.editPost = action.payload;
    },
    deletePost(state, action) {
        state.isLoading = false;
        state.deletePost = action.payload;
    },
        
        postImage(state, action) {
            state.isLoading = false;
            state.postImage = action.payload;
  },

    postStatus(state, action) {
        state.isLoading = false;
        state.postStatus = action.payload;
  },
}
});


export const { addPost, editPost, deletePost } = postSlice.actions

export default postSlice.reducer