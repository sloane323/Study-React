import { Link } from "react-router-dom";

/** 
 * 라우터에서 Link를 통해서 이동할때 값을 전달
 * Link를 통해서 state에 값을 담아 전달하려고 함 - LinkState
 * 이 값은 useLocation을 이용해서 값을 가져올 수 있다 - LocationState
*/
const LinkState = () => {
    const varInput = "작성한 값입니다";

    return ( 
        <div>
            <h3>Link를 이용해서 값을 전달하기</h3>
            <p>
                LinkState의 path는 /link, 
                LocationState의 path는 /location
            </p>
            <p>Link의 속성 state에 값을 넣어서 전달</p>
            <p>Link의 state 대신에 useNavigate의 두번째 인자에 중괄호(객체형태)를 통해서 state:값 을 전달할 수 있다</p>
            <Link to='/location' state={'값전달'}>LocationState로 문자열 이동</Link> <br />
            <Link to='/location' state={varInput}>LocationState로 변수값 이동</Link> <br />

            <p> Link의 to 대신에 useNavigate를 사용해도 동일한 효과</p>
            <Link to='/query?name=안녕'>쿼리스트링을 가지고 이동</Link>
        </div>
    );
}

export default LinkState;