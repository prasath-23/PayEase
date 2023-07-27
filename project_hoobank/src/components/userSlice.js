import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"case",
    initialState:{
        case:null
    },
    reducers:{
        caseSuccess: (state,action)=>{
            state.case = action.payload;
        },
         caseFailure: (state)=>{
            state.case = null;
         },
    }
})

export const {caseSuccess,caseFailure} = userSlice.actions;
const selectUser = (state)=>state.case.case;
export default userSlice.reducer;