import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../allTodos/AllTodo.css'

export const CompletedTodos = () => {
    const doneTodo = useSelector(state => state.completedTodo)
    const dispatch = useDispatch()

    const deleteTodo = (id) => {
        dispatch({
            type: 'DELETE_COMPLETED_TODO',
            payload:id
        })
    }
  return (
    <div>
        <h2>Completed Todo</h2>
        <ul className="completed-todo">
                {
                    doneTodo.map((todo, index) => <div key={ todo.id }><li className='completed-li'>{ index+1 }&nbsp;&nbsp;{ todo.title }
                    <button className='delete' onClick={ () => {deleteTodo(todo.id)} }>X</button>
                    </li></div>)
                }
            </ul>
    </div>
  )
}
