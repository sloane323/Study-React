import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {settitle,setPrice } from "./modules/book";


const BookBox = () => {
   const title = useSelector((state)=>(state.book.title));
   const price = useSelector((state)=>(state.book.price));
   const dispatch = useDispatch();

   const [inputtitle, setInputtitle] = useState();
   const [inputprice, setInputprice] = useState();

    return ( 
        <div>
           <p>리덕스 툴킷 내용 출력화면 </p>
           { /**
            * Redux에서 진행한 book.js의 내용을 ReduxToolKit에 새로 작성하고
            * Store에 연결화면에 출력하세요 
            */
           }

           <h3> 책 제목 : {title}</h3>
           <h5> 가격 : {price}</h5>

           <input type="text" value={inputtitle} onChange={(e)=>{setInputtitle(e.target.value)}} /> 
           <button onClick={()=>{dispatch(settitle(inputtitle))}}> 제목수정 </button>

           <input type="number" value={inputprice} onChange={(e)=>{setInputprice(e.target.value)}} /> 
           <button onClick={()=>{dispatch(setPrice(inputprice))}}> 가격수정</button> 

           <hr />
        </div>
     );
}
 
export default BookBox;