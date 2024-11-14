import { configureStore } from "@reduxjs/toolkit";
import slicereducer from './slice'

const store = configureStore({
     reducer : {
         slice : slicereducer
     }
})

export default store