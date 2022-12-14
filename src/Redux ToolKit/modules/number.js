// reduxjs/toolkit의 createSlice를 이용하여 
// 간단하게 리듀서 함수와 액션함수를 만들수 있다
import { createSlice } from "@reduxjs/toolkit"
// 초기값
const initialState = {
    num : 1, 
    today : "yyyy-MM-dd",
}

// 리듀서함수 작성
const numberSlice = createSlice({
    name : "number",
    initialState : initialState,
    reducers : {
        increase : (state)=>{
            // 함수 안에 state값을 직접 접근하여 바꿀수 있다
            // 이전에 직접 접근하지 못할때는 값을 한번에 바꿈
            // >> 값 전체가 바뀌는 것을 막기위해서, ... 스프레드 연산자 사용
            // toolkit을 사용하면 직접 접근해서 바꿀수 있다.
            state.num += 1;
        },

        discrease : (state) => {
            state.num -= 1; 
        },

        count : (state) => {
         const todays = new Date(); 
    if (state.today === todays) { 
       return  alert("정답!");
    } else { 
        alert("정답을 찾아보자");
        console.log(todays);
    }
        },

       setNum  : (state, action) => {state.today = action.payload}
        // 외부에서 값을 가지고 오고 싶을때는 atction.payload를 통해서 가져옴 
    }
})

// 사용할 액션 함수 내보내기 - numberSlice에서 가져옴
export const {increase} = numberSlice.actions;
export const {discrease} = numberSlice.actions;
export const {count ,setNum } = numberSlice.actions;
// 사용할 리듀서 내보내기 - numberSlice에서 가져옴
export default numberSlice.reducer