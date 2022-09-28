import {useState} from "react";
import {useDispatch} from "react-redux";
import cuid from "cuid";
import {addTodo} from "../../Action/todoAction";


const AddTodo = ()=>{
    const [tasks , setTasks] = useState(" ");
    const dispatch = useDispatch()
    const handleChange = (e)=>{
        setTasks(e.target.value);
        console.log(tasks);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
       dispatch(addTodo({task: tasks, id : cuid()}))
        e.target.userInput.value = "";
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
                type = 'text'
                name='userInput'
                placeholder="Enter your task..."
                onChange={(e) =>handleChange(e)}/>
            <button type='submit'>ADD</button>
        </form>
    )
}

export default AddTodo;