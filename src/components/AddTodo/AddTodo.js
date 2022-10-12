import {useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../../Action/todoAction";
import cuid from "cuid";

const AddTodo = () =>{
    const [tasks , setTasks] = useState("");
    const dispatch = useDispatch();
    function handleChange(e) {
        setTasks(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        // eslint-disable-next-line no-undef
        if (!tasks.length || /^(\w+\s)*\s*$/i.test(tasks) ) {
            return;
        }
        setTasks(dispatch(addTodo({task : tasks , id : cuid()})));
        e.target.userInput.value = "";
        // console.log(tasks)

    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            name = 'userInput'
            placeholder="Enter your task.."
            onChange={(e) => handleChange(e)}
            />

            <button type = 'submit'>Add</button>
        </form>
        </>
    )
  }

  export default AddTodo;