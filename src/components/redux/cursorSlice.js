import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    setCustomCursor: false,
    setCursorText: ""
}

export const cursorSlice = createSlice({
  name: 'customCursor',
  initialState,
  reducers: {
    switchCursor: (state, action) => {
        return action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { switchCursor } = cursorSlice.actions

export const cursorReducer = cursorSlice.reducer