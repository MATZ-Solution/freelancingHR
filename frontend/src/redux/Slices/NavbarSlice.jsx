import { createSlice } from '@reduxjs/toolkit'

export const navbarSlice = createSlice({
  name: 'navbarState',
  initialState: {
    status: false
  },
  reducers: {
    updateStatus: (state,action) => {
      state.status = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { updateStatus } = navbarSlice.actions

export default navbarSlice.reducer