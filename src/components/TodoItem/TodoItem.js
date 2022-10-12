import {useDispatch} from "react-redux";
import {deleteTodo, updateTodo} from "../../Action/todoAction";
import {useRef, useState} from "react";

const TodoItem = ( task ) =>{

    const [isUpdate , setIsUpdate] = useState(false);
    // console.log(task.task1.id)
    const dispatch = useDispatch();
    const textRef = useRef(null);
    // console.log("entered task is ",task)

    const editFormState = (e)=>{
        e.preventDefault();
        if (! textRef.current.value.length || /^(\w+\s)*\s*$/i.test( textRef.current.value ) ) {
            return;
        }
        dispatch(updateTodo({message : textRef.current.value , id: task.task1.id}));
        setIsUpdate(false);
        textRef.current = null
    }
    const renderForm = () =>{
        return(
            <form onSubmit={editFormState}>
                <input
                    ref={textRef}
                type='text'
                defaultValue={task.task1.task}
                />
                <button type='submit' >Edit Todo</button>
            </form>
        )
    }

    const renderItem = () => {
        return(
        <>
            {task.task1.task}
            <button onClick={() => setIsUpdate(true)}>Edit</button>
            <button onClick={() =>dispatch(deleteTodo(task.task1.id))}>Delete</button>
            <div></div>
        </>
        )}

    return(
        <>
            <p></p>
        {isUpdate ? renderForm() : renderItem()}
        </>
    )
}
export default TodoItem