import { useState } from "react";
import Todo2List from "./Todo2List";
import Todo2Input from "./Todo2Input";

const Todo2 = () => {
    const[cmd, setCmd] = useState("list")

    const changeView = (value) => {
        setCmd(value)
    }

    const getView = () => {

        if(cmd === 'list'){
            return <Todo2List changeView={changeView}></Todo2List>
        }else if(cmd === 'input'){
            return <Todo2Input changeView={changeView}></Todo2Input>
        }
    }

    return ( 
        <div>
            {getView()}
        </div>
     );
}
 
export default Todo2;