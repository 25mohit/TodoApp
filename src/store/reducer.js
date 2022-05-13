import { createStore } from "redux";

const initialState = {
    addTodos:[],
    completedTodo:[]
}
const reducer = (state = initialState , action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return{
                ...state,
                addTodos:[...state.addTodos, action.payload]
            }
        case 'REMOVE_TODO':
        return{
            ...state,
            addTodos: state.addTodos.filter( todo => todo.id !== action.payload)
        }
        case 'COMPLETED_TODO':
            return{
                ...state,
                completedTodo: [...state.completedTodo, action.payload]
            }
        case 'DELETE_COMPLETED_TODO' :
            return{
                ...state,
                completedTodo: state.completedTodo.filter(todo => todo.id !== action.payload)
            }
            default :
            return state;
    }
}
export default createStore( reducer )