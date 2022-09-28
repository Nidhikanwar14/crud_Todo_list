import {useSelector} from "react-redux";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
    const taskObj = useSelector((state) => state.todos.data);
    console.log(taskObj)
    const taskItems = taskObj.map((task) => {
        return <TodoItem task={task} key={task.id} />;
    });
console.log(taskItems)
    return <div>{taskItems}</div>;
};

export default TodoList;