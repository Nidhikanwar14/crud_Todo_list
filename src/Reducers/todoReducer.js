import {ADD_TODO, DELETE_TODO, UPDATE_TODO} from "../Action/todoTypes";

const initialState = {
    data : [],
}

const todoReducer = (state = initialState , action)=>{
    switch (action.type){
        case ADD_TODO:
            return{
              ...state,
                data:[...state.data , action.payload.message],
            }

        case DELETE_TODO:
            return{

            }

        case UPDATE_TODO:
            return {

            }

        default:
            return state;
    }
}

export default todoReducer;