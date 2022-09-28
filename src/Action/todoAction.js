import {ADD_TODO, DELETE_TODO, UPDATE_TODO} from "./todoTypes";

export const addTodo = (message) =>{
    return{
    type : ADD_TODO,
    payload: message
    }
}

export const deleteTodo = (id) =>{
    return{
        type : DELETE_TODO,
        payload: id
    }
}

export const updateTodo = ({message , id }) =>{
    return{
        type: UPDATE_TODO,
        message,
        id
    }
}