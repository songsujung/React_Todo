import { useState } from "react";
import { postTodo } from "../../api/TodoAPI";

// 기본값 설정
const initState = {
    title : ''
}

const Todo2Input = ({changeView}) => {

    const [todo, setTodo] = useState(initState) // 상태(오류 안나게끔 기본값 설정)

    const handlechangeTodo = (e) => {
        todo[e.target.name] = e.target.value
        setTodo({...todo})
    } // Todo를 변경하는 함수 생성


    // handleChangeTodo에 파라미터 값이 없어서 onChange 바로 사용가능
    return ( 
        <div className="w-full h-[100vh] bg-blue-800">
            <div className="text-3xl">Todo2Input</div>
            <div className="text-2xl m-2 p-2 border-2">
                <input type="text" name="title" value={todo.title} onChange={handlechangeTodo}></input>
            </div>
            <button onClick={() => {
            postTodo(todo).then(newTodo => {alert("NEW TODO" + newTodo.tno)
            changeView("list")})

            }}>Register</button>
        </div>
     );
}
 
export default Todo2Input;