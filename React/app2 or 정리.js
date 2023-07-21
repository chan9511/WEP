import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

function App() {
    // 1번째 인자 -> 변수 / 2번째 인자 -> 변수의 값을 변화시킬 함수
    // 2번째 인자의 가장 앞에는 "무조건" set 키워드를 붙여서 사용.
    // useState 함수의 인자는 초기값을 의미
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);
    

    //  1. 항상 렌더링이 된다. (항상 렌더링 되는 경우는 매우 없음. 잘 안쓴단 의미)
    // useEffect(() => {
    //   console.log("항상 렌더링 가눙")
    // })

    // 2. 처음에만 렌더링이 된다.
    useEffect(() => {
      console.log("처음만 렌더링 가눙 ★")
    }, [])

    // 3-1. count 변수의 상태가 변할 때 렌더링이 된다.
    useEffect(() => {
      console.log("count 변수 렌더링 가눙 ♬")
    }, [count])

    // 3-2. count2 변수의 상태가 변할 때 렌더링이 된다.
    useEffect(() => {
      console.log("count2 변수 렌더링 가눙 ☎")
    }, [count2])


    function increase() {
        // setCount(count + 1);
        setCount((이전값) => 이전값+10);
    }
    function multiple() {
        // setCount(count - 1);
        setCount2((previousValue) => previousValue*2);
    }

    return (
        <div className="container text-center mt-3">
            <h1>React Hooks</h1>
            <hr />
            <h4>현재 값은: {count}</h4>
            <button
                className = "btn btn-primary me-3 mb-3"
                onClick={increase}
            >
                10 증가
            </button>
            <h4>현재 값은: {count2}</h4>
            <button
                className = "btn btn-primary me-3 mb-3"
                onClick={multiple}
            >
                곱하기 2
            </button>
        </div>
    )
}

export default App;

// props 전달을 자식으로 하는데, 자식이 수없이 많다면?
// 이런 문제를 단어로 표현하면 props drilling -> useContext -> Redux

// useState - 변수 상태 변화
// useEffect - 렌더링 제어
// ------------------------- 위 두개만 사용 많이함.
// useCallback - 함수 재사용
// useContext - 전역변수 값의 상태를 관리 -> Redux
// useRef - DOM 특성 제어 
// useLocations - Routiong 되는 경로의 파라미터 관리
// useParams - 동적 라우팅되는 파라미터를 관리`

// node.js 패키지 이용 -> Emer, Emmert (??)
    // setUserArray(userArray.concat(tempObject));

    // ...prevValue 배열을 풀어헤친다.
    // ...prevValue -> [{A},{B},{C},{D}]
    // prevValue -> {A},{B},{C},{D}
    // tempObject -> {E}

    // ...prevValue, tempObject -> [{A},{B},{C},{D},{E}]
    // 새로운 배열이 탄생 -> 기존의 배열을 안 건드림 -> 불변성 가짐