import { useEffect, useState } from "react";
import { getList } from "../../api/TodoAPI";

const initState = {dtoList:[]}

const Todo2List = ({changeView}) => {

    const [data, setData] = useState(initState)

    useEffect(() => {
        getList().then(result => {
            console.log(result)
            setData(result)
        })
    },[])

    return ( 
        <div className="w-full h-[100vh] bg-sky-400">
            <div className="text-3xl">Todo2List</div>
            <button onClick={() => changeView('input')}>Input</button>
            <ul>
                {data.dtoList.map(todo => <li key={todo.tno}>{todo.tno} - {todo.title}</li>)}
            </ul>

        </div>
     );
}
 
export default Todo2List;