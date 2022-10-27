import { createSlice } from "@reduxjs/toolkit"

export interface CounterState {
    addBookIsVisible : boolean,
    updateIsVisible : boolean
  }

  const initialState: CounterState = {
    addBookIsVisible : false,
    updateIsVisible : false
  }

export const addBookSlice = createSlice({
    name : "addModal",
    initialState,
    reducers :{
        toggle1(state) {
            state.addBookIsVisible = !state.addBookIsVisible
        },
        toggle2(state) {
          state.updateIsVisible = !state.updateIsVisible
        }
    }
})

export const addBookAction = addBookSlice.actions;
export default addBookSlice.reducer;
