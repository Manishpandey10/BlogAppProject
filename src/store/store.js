<<<<<<< HEAD
import {configureStore} from '@reduxjs/toolkit'

export const store = configureStore({
    reducer:{}
})
=======
import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';

const store = configureStore({
    reducer: {
        auth : authSlice,
        //TODO: add more slices here for posts
    }
});


export default store;
>>>>>>> 81fcd72 (some changes)
