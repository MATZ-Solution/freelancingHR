import { configureStore } from '@reduxjs/toolkit'
import NavbarSlice from './Slices/NavbarSlice'
import  freelancerDetailsSlice  from './Slices/FreelancerDetailsSlice'
import UserType from './Slices/UserType'

export default configureStore({
  reducer: {
    navbarState: NavbarSlice,
    freelancerDetails: freelancerDetailsSlice,
    UserType: UserType
  }
})