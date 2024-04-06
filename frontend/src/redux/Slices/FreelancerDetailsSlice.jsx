import { createSlice } from '@reduxjs/toolkit'

export const freelancerDetailsSlice = createSlice({
  name: 'freelancerDetails',
  initialState: {
    data: {}
  },
  reducers: {
    updateFreelancerDetail: (state,action) => {
      state.data = action.payload
    }
  }
})

export const { updateFreelancerDetail } = freelancerDetailsSlice.actions

export default freelancerDetailsSlice.reducer