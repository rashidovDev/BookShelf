import { configureStore } from "@reduxjs/toolkit";
import addBookSlice from "./slices/addBookSlice";

const store = configureStore({
    reducer : {
        addBookSlice : addBookSlice
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch