// toolkit 을 사용해서 store 구성
import { configureStore } from "@reduxjs/toolkit"
import bookReducer from "./book"
// 작성한 슬라이스를 추가
// - export default로 전달한 값은 원하는 이름으로 바꿔서 전달가능
import numberReducer from "./number"

// configureStore : store로 내보내줌
export default configureStore( {
    // 작성한 리듀서를 연결
    reducer : {
        number : numberReducer,
        book : bookReducer
    },
} )