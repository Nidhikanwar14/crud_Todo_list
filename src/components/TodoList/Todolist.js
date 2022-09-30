import {useSelector} from "react-redux";
import TodoItem from "../TodoItem/TodoItem";

const Todolist = () =>{

    const taskObj = useSelector((state) => state.todos.data);
    const taskItems = taskObj.map((task) => {
        return <TodoItem task1={task} key={task.id}/>
    })
    return <div>
            {taskItems}
        </div>

}

export default Todolist;