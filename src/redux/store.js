import { configureStore } from '@reduxjs/toolkit';
import { profileReducer, userReducer } from './reducers/userReducer';
import { courseReducer } from './reducers/courseReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    course: courseReducer,
  },
});

export default store;

// export const server = 'https://eduhub-mern-server.onrender.com/api/v1';
// export const server = 'https://eduhub-mern-backend.onrender.com/api/v1';

export const server = 'https://eduhub-mern-backend-1.onrender.com/api/v1';
