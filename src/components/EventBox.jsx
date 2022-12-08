// 자주 사용하는 이벤트 확인
// 객체와 배열, 객체들을 가진 배열에 대한 내용
// map, filter > 자바스크립트의 메소드(함수) 

import { useState } from "react";

// EventBox.jsx전체영역에서 사용
let name = "aa"; // 화면에 출력되지않고 많이 바뀌는 값들에 사용
// 이 값을 화면에 출력하고싶다면 - state에 담아서 화면이 바뀌도록

// 데이터 기능 > 자바스크립트의 메소드에서 확인
const EventBox = () => {
    const [changeName, setChangeName] = useState("");
    // state의 changname 받아옴
    const [clickName, setClickName] = useState(""); 
    // 변수 name을 받아옴
    const [varName, setVarName] = useState("");
    

    const funcName = (n)=>{name = n; console.log(name);};
    
    // 객체 state에 이벤트로 값 넣기
    // 1. 각각의 속성에 값을 넣어줘야 함
    // 2. 남은 속성의 값을 유지 >  ...(스프레드연산자):객체나 배열안에있는 그 요소의 값을 꺼냄
    const [user, setUser] = useState( 
        { name : "", address: ""}
    )
    
    // 이벤트에 들어갈 함수
    const changUser = (e)=>{ // 변수의 값을 속성을 사용하기위해 []
        setUser({...user, [e.target.name] :e.target.value}) 
    }

    // 변수 : 고정해서 쓸값, 화면상에서 바뀌지 않을 값
    // 컴포넌트를 반복해서 출력하기위해 배열 사용
    const info = ['name', 'address'];

    // 배열 안에 객체를 넣어서 진행
    const infoObj = [
        {name:"name", info:"이름", id:1},
        {name:"address", info:"주소", id:2}
    ]

    
    return ( 
        <div>
            <h3>이벤트 박스</h3>
            <h4> state로 작성한 이름 : {changeName}, 변수 이름 : {name} </h4>
            <input type="text" onChange={(e)=>{ setChangeName(e.target.value) }} />
            <button onClick={()=>{ setClickName(changeName)}} >state 값을 저장</button>
            <input type="text" onChange={(e)=>{ funcName(e.target.value) }} />
            <button onClick={()=>{ setVarName(name) }}>변수값을 가져와서 저장</button>
            <h4>state값을 가져와서 저장 : {clickName},변수값을 가져와서 저장:{varName} </h4>
            <hr />

            <h3>객체의 값 바꾸기</h3>
            <p>유저의 이름 :{user.name}, 유저의 주소:{user.address}</p>
            이름 : <input type="text" name="name" 
                // ...사용하여 객체안의 값을 전부 가져오고,
                // 그 안에 값을 바꾸고 싶다면, 바꾸고싶은 속성의 이름을 사용
            onChange={ changUser }  // e객체는 값을 전달하지않아도 쓸수있다
            /> <br/>
            주소 : <input type="text" name="address"
            onChange={ changUser} 
            ></input>
            <hr />

            <h3>배열을 통해서 컴포넌트/태그 반복하기</h3>
            <p>배열의 값(문자열/컴포넌트)도 html에 그대로 출력할수 있다</p>
            <h4>{user.name},{user.address}</h4>
            {info}
            { // 배열을 map을 통해서 반복
            // map : 배열의 메소드 (배열이 아니면 사용X)
            // 배열의 값을 꺼내서 return 새로운 배열을 작성
            // > 원하는 모양으로 출력
                // info : 배열, infomation은 배열 안에있는 요소
                // index : 현재 가져온 배열안에있는 요소의 index
                // {}가 아니라 ()를 사용하는 이유
                //   : return값을 통해 태그, 컴포넌트 사용하기 위함
                info.map((infomation, index)=> (
                    <div>
                        {infomation} 
                        <input type="text" name={infomation} key={index} 
                        onChange={changUser}
                        />
                    </div>
                ) )
            }
            <hr />
            <h3>객체의 배열</h3>
            {/*infoObj : 객체는 리액트에서 바로 출력할수 없다*/}
            {
                infoObj.map((infomation)=>{
                    // {}를 사용했다면 return을 사용해서 값을 내보냄
                    return (
                        <div>
                            {infomation.info}
                            <input type="text" name={infomation.name}
                            key={infomation.id}
                            onChange={changUser}
                            />
                        </div>
                    )
                })
            }
            <hr />
            <h3>filter함수 사용</h3>
            { // filter함수는 return 값이 true 이면 새로운 배열에 넣고,
                // false 이면 새로운 배열에 넣지 않음 
                // 원본 배열에는 영향을 미치지 않음
                info.filter((infomation)=>( infomation=="name" ))
                // 원본 배열의 값을 바꾸고 싶다면, 
                // 그 원본 배열의 값에 새로 만들어진 배열을 넣어주어야한다
                // filter의 결과값이 배열이기 때문에, 
            }
            {   // map을 이용해서 다시 화면에 출력할 수 있다
                // map을 통해서 객체의 값을 바꿔서 넣어줄수 있다
                        //filter의return의 값 : T/F > 원본의 값으로
                infoObj.filter((infomation)=>(infomation.id==2)) 
                        //map의 return의 값: 원본의값+추가 > 작성(수정)한 값으로
                        .map((infomation)=>( infomation.id==2 
                                            ? {...infomation, info:"수정된주소"} 
                                            : infomation))                 
                        .map((infomation)=>(<p>{infomation.info}</p>))
            }
        </div>
    );
}

export default EventBox;