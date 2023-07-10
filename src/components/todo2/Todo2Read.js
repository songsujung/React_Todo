import { useEffect, useState } from "react";
import { getTodo, putTodo, removeTodo } from "../../api/TodoAPI";

// Read페이지에서 삭제, 수정 진행
const initState = {
    tno:0,
    title:''
}

const Todo2Read = ({target, changeView}) => {

    const [todo, setTodo] = useState(initState)

    const [refresh, setRefresh] = useState(false)

    // target값이 변경되면 useEffect할 것이다.
    useEffect(() => {
        
        //getTodo해서 가져온 data값을 setTodo
        getTodo(target).then(data => setTodo(data))

    },[target, refresh])// 의존주입

    // 삭제
    const handleClickDel = async() => {

        const {result} = await removeTodo(target)

        // {result:'success'}

        if(result === 'success'){
            alert("삭제되었습니다.")
        }
        changeView("list")

    }

    // 수정
    const handleClickMod = async () => {
        const {result} = await putTodo(todo)

        if(result === 'success'){
            alert("수정되었습니다.")
        }
        setRefresh(!refresh)

    }

    return ( 
        <div>
            <div>Todo Read</div>
            <div>{target}</div>
            <div>{todo.tno}</div>
            <div>
                <input type="text" value={todo.title} onChange={e => {
                todo.title = e.target.value
                setTodo({...todo})
                }}></input>
            </div>
            <div className="flex p-4">
                <button className="m-2 p-2 border-2" onClick={handleClickMod}>MOD</button>
                <button className="m-2 p-2 border-2" onClick={handleClickDel}>DEL</button>
            </div>
        </div>
     );
}
 
export default Todo2Read;