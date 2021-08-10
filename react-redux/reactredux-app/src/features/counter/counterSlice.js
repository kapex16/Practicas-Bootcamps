import { createSlice } from "@reduxjs/toolkit";

function changeColor(color){
    return color==='red' ? 'green' : 'red'
}

export const counterSlice= createSlice({
    name:'counter',
    initialState:{
        value:0,
        color: 'red',
    },
    
    reducers:{
        increment:(state)=>{
            state.value +=1
            state.color = changeColor(state.color);

        },
        
        }
})

export const {increment} = counterSlice.actions
export default counterSlice.reducer