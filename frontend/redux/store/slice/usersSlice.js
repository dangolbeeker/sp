import { map, filter } from 'lodash';
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    posts: [],
    followers: [],
    following: [],
    userProfile: [],
    userGallery: [],
    userFeed: [],
    userStatus: [],
    userStory: []
};

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        startLoading(state) {
            state.isLoading = true;
        },

        getProfileSuccess(state, action) {
            state.isLoading = false;
            state.userProfile = action.payload;
        },
        getUserBioSuccess(state,action) {
            state.isLoading = false;
            state.userBio = action.payload;
        },

        getPostsSuccess(state, action) {
            state.isLoading = false;
            state.posts = action.payload;
        },
        getUsersSuccess(state, action) {
            state.isLoading = false;
            state.users = action.payload;
        },
        deleteUser(state, action) {
            state.isLoading = false;
            state.userList = deleteUser
        },

        getUserGallerySuccess(state, action) {
            state.isLoading = false;
            state.userGallery = action.payload;
        }, 

        getFollowersSuccess(state, action) {
            state.isLoading = false;
            state.followers = action.payload;
        },
        onToggleFollow(state, action) {
            const followerId = action.payload;
      
            const handleToggle = map(state.followers, (follower) => {
              if (follower.id === followerId) {
                return {
                  ...follower,
                  isFollowed: !follower.isFollowed
                };
              }
              return follower;
            });

        state.followers = handleToggle;
    },

    getFollowingSuccess(state, action) {
        state.isLoading = false;
        state.following = action.payload;
    },

    getNotificationSuccess(state, action) {
        state.isLoading = false;
        state.notifications = action.payload;
    }
}

});

export default slice.reducer;

export const { onToggleFollow, deleteUser } = slice.actions;


export function getuserProfile() {
    return async (dispatch) => {
      dispatch(slice.actions.startLoading());
      try {
        // const response = await axios.get('/api/user/profile');
        dispatch(slice.actions.getProfileSuccess(response.data.profile));
      } catch (error) {
        dispatch(slice.actions.hasError(error));
      }
    };
  }
  
  // ----------------------------------------------------------------------
  
  export function getPosts() {
    return async (dispatch) => {
      dispatch(slice.actions.startLoading());
      try {
        // const response = await axios.get('/api/user/posts');
        dispatch(slice.actions.getPostsSuccess(response.data.posts));
      } catch (error) {
        dispatch(slice.actions.hasError(error));
      }
    };
  }
  
  // ----------------------------------------------------------------------
  
  export function getFollowing() {
    return async (dispatch) => {
      dispatch(slice.actions.startLoading());
      try {
        // const response = await axios.get('/api/user/social/followers');
        dispatch(slice.actions.getFollowersSuccess(response.data.followers));
      } catch (error) {
        dispatch(slice.actions.hasError(error));
      }
    };
  }
  
  // ----------------------------------------------------------------------
  
  export function getFollowers() {
    return async (dispatch) => {
      dispatch(slice.actions.startLoading());
      try {
        // const response = await axios.get('/api/user/social/friends');
        dispatch(slice.actions.getFriendsSuccess(response.data.friends));
      } catch (error) {
        dispatch(slice.actions.hasError(error));
      }
    };
  }
  
  // ----------------------------------------------------------------------
  
  export function getUserGallery() {
    return async (dispatch) => {
      dispatch(slice.actions.startLoading());
      try {
        // const response = await axios.get('/api/user/social/gallery');
        dispatch(slice.actions.getGallerySuccess(response.data.gallery));
      } catch (error) {
        dispatch(slice.actions.hasError(error));
      }
    };
  }
  
  // ----------------------------------------------------------------------
  
  export function getUserList() {
    return async (dispatch) => {
      dispatch(slice.actions.startLoading());
      try {
        // const response = await axios.get('/api/user/manage-users');
        dispatch(slice.actions.getUserListSuccess(response.data.users));
      } catch (error) {
        dispatch(slice.actions.hasError(error));
      }
    };
  }
  



export function getNotifications() {
    return async (dispatch) => {
      dispatch(slice.actions.startLoading());
      try {
        const response = await axios.get('/api/user/account/notifications-settings');
        dispatch(slice.actions.getNotificationsSuccess(response.data.notifications));
      } catch (error) {
        dispatch(slice.actions.hasError(error));
      }
    };
  }
  
  
  export function getUsers() {
    return async (dispatch) => {
      dispatch(slice.actions.startLoading());
      try {
        const response = await axios.get('/api/user/all');
        dispatch(slice.actions.getUsersSuccess(response.data.users));
      } catch (error) {
        dispatch(slice.actions.hasError(error));
      }
    };
  }