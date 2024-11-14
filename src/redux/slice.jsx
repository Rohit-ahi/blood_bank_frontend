
import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
     name:'blood',
     initialState: {
        token : localStorage.getItem('token') || null
     },
     
     reducers : {

           storetoken : (state,action)=>{
                 state.token = action.payload.token
                 localStorage.setItem('token',action.payload.token)
           },
           cleartoken : (state)=>{
                state.token = null
                localStorage.removeItem('token')
           }
    }
})

export default slice.reducer
export const {storetoken ,cleartoken} = slice.actions