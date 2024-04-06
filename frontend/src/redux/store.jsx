import { configureStore } from '@reduxjs/toolkit'
import NavbarSlice from './Slices/NavbarSlice'
import  freelancerDetailsSlice  from './Slices/FreelancerDetailsSlice'

export default configureStore({
  reducer: {
    navbarState: NavbarSlice,
    freelancerDetails: freelancerDetailsSlice,
  }
})