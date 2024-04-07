import { createSlice } from '@reduxjs/toolkit'

export const userTypeSlice = createSlice({
  name: 'userType',
  initialState: {
    userType: ''
  },
  reducers: {
    updateUserType: (state,action) => {
      state.userType = action.payload
    }
  }
})

export const { updateUserType } = userTypeSlice.actions

export default userTypeSlice.reducer