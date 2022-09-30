import {ADD_TODO, DELETE_TODO, UPDATE_TODO} from "../Action/todoTypes";


const initialState = {
    data : [],
}

const todos = (state = initialState , action)=>{
    switch (action.type){
        case ADD_TODO:
            // console.log("hello ");
            // console.log("data is",state.data);
            // const data2 = [...state.data]
            // data2.push(action.payload)
            // console.log('data2 is ', data2)
            return{
              ...state,
                data:[...state.data , action.payload],
            }

        case DELETE_TODO:
            // console.log(action.payload)
            return{
             ...state,
                data: [...state.data.filter((todo) =>todo.id !== action.payload)]
            }

        case UPDATE_TODO:
            // console.log(action.message)
            // console.log(action.id)
            return {
                ...state,
                data: [...state.data.filter((todo) =>todo.id !== action.id),
                    {task : action.message , id: action.id}]
            }

        default:
            return state;
    }
}

export default todos;