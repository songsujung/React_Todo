import { useState } from "react";
import Todo2List from "./Todo2List";
import Todo2Input from "./Todo2Input";
import Todo2Read from "./Todo2Read";

const Todo2 = () => {
    const [cmd, setCmd] = useState("list")
    const [target, setTarget] = useState(0)

    const changeView = (value, tno) => {
        setCmd(value)
        
        // tno값이 존재한다면 tno값 세팅
        if(tno){
            setTarget(tno)
        }
    }

    const getView = () => {

        if(cmd === 'list'){
            return <Todo2List changeView={changeView}></Todo2List>
        }else if( cmd === 'input'){
            return <Todo2Input changeView={changeView}></Todo2Input>
        }else if( cmd === 'read'){
            return <Todo2Read target={target} changeView={changeView}></Todo2Read>
        }
    }

    return ( 
        <>
        <div className="w-full h-24 bg-blue-500 flex justify-center">
            <div className="border-2 text-red w-32" onClick={() => changeView("list")}>LIST</div>
            <div className="border-2 text-red w-32" onClick={() => changeView("input")}>INPUT</div>
        </div>
        <div>
            {getView()}
        </div>
        </>

     );
}
 
export default Todo2;