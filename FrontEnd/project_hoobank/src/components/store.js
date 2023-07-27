import { configureStore } from "@reduxjs/toolkit";
import caseReducer from "./userSlice"

export default configureStore({
    reducer:{
        case : caseReducer
    }
})
