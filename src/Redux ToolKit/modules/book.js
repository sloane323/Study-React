import { createSlice } from "@reduxjs/toolkit"

// 초기값
const initialState = {
title: "편향의 종말 : 제시카 노델 지음, 김병화 옮김 / 웅진지식하우스" ,
price: 20800,
}

// 리듀서함수 작성
const numberSlice = createSlice({
    name : "book",
    initialState : initialState,
    reducers : {
        settitle : (state,action)=>{
            state.title = action.payload; 
        },
        setPrice : (state,action) => {
            state.price = action.payload;
        }

       
    }
})

// 사용할 액션 함수 내보내기 - numberSlice에서 가져옴
export const {settitle} = numberSlice.actions;
export const {setPrice} = numberSlice.actions;
// 사용할 리듀서 내보내기 - numberSlice에서 가져옴
export default numberSlice.reducer