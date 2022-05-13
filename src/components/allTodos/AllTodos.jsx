import React from 'react'
import './AllTodo.css'
import { useDispatch, useSelector } from 'react-redux'

export const AllTodos = () => {
    const allTodo = useSelector(state => state.addTodos)

    const dispatch = useDispatch()
    const deleteTodo = (id) => {
        dispatch({
            type :'REMOVE_TODO',
            payload: id
        })
    }
    const completeTodo = (id, title) => {
        dispatch({
            type :'REMOVE_TODO',
            payload: id
        })
        dispatch({
            type: 'COMPLETED_TODO',
            payload:{
                id, title
            }
        })
    }
  return (
    <div className='all-todo-div'>
        <ul className='li-todo'>
                {
                    allTodo.map((todo, index) => <div key={ todo.id }><li>
                        { index+1 }&nbsp;&nbsp;
                        { todo.title }
                        <button className='check' onClick={ ()=>{
                            completeTodo(todo.id, todo.title)
                        }  }>&#10003;</button>
                        <button className='delete' onClick={ ()=>{
                            deleteTodo(todo.id)
                        } }>X</button>
                        </li>
                        
                        </div>)
                }
        </ul>
    </div>
  )
}
