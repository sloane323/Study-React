import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BoardPage = (props) => {

    //받아온 props 값 확인
    const {name, outletname} = props;
    
    // 주소를 통해 전달해준 params 값을 가져와서 사용할수 있다
    // params 안에 객체 형태로 들어있기 때문에, 
    // 구조화 할당을 통해서 사용가능
    const {page, id} = useParams();
    // id 값을 넣었을때 설정하지 않으며 언디파인드 값을 가져옴 

    //1부터 5까지 데이터를 가지고 있는 배열 작성 
    // 그 중에서 동일한 id 값을 가지과 있는 내용만 출력 
    // 자바스크립트의 배열 매소드 사용 

    const [memos , setmemo] = useState([
        {id : 0, title : "이건 첫번째"},
        {id : 1, title : "안녕 난 홀리야 "},
        {id : 2, title : " 난 천재지 "},
        {id : 3, title : " 앞으로도 계속 천재일꺼야  "},
        {id : 4, title : " 데헷 "},
     
    ]);

    // 객체의 값을 돌려줄 경우에는 값이 다른 변수에 넣고 확인
    // 배열의 객체요소를 꺼내서 하나씩 비교하여 참인 요소를 return 
    // 현재 id와 같은 메모를 변수에 저장 
    const memo = memos.find((m)=> m.id == id)

    // useNavigate 를 통해서 자바스크립를 통해 주소 이동
    const navigate = useNavigate();

    return ( 
        <div>
            {outletname}의? {/** 찾아올수없음  */}
          {name} board의 {page}페이지입니다 <br />
            board의 {id}페이지입니다
            <p> {memo ? memo.title : "값이 없습니다."}</p>

            <button onClick={()=>{navigate(-1);}}>뒤로 이동하기 뿅</button>
            <button onClick={()=>{navigate('/board');}}>게시판 목록으로 이동 (보드) </button>

        </div>

     );
}
 
export default BoardPage;