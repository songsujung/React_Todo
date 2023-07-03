import { useState } from "react";
import { postTodo } from "../../api/TodoAPI";

const initState = {
    title : ''
}

const Todo2Input = ({changeView}) => {

    const [todo, setTodo] = useState(initState)

    const handlechangeTodo = (e) => {
        todo[e.target.name] = e.target.value
        setTodo({...todo})
    }

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