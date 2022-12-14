import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { count, discrease, increase,setNum } from "./modules/number";

const NumberBox = () => {
    const num = useSelector((state)=>(state.number.num));
    const today = useSelector((state)=>(state.number.today));
    const dispatch = useDispatch();

    const [input, setInput] = useState();


    return ( 
        <div>
            <h1>{num}</h1>
            <button onClick={()=>{dispatch( increase() )}}>1증가</button>
            <button onClick={()=>{dispatch( discrease() )}}>1감소</button>

            <h2>{today}</h2>
            <input type="date" id="start" name="trip-start" value={input} min="2023-01-01" max="2050-12-31" 
            onChange={(e)=>{setInput(e.target.value)}}/> <br />
            <button onClick={ ()=>{dispatch(setNum(input))}}> 당신이 원하는 날 </button> <br />





        </div>
     );
}
 
export default NumberBox;