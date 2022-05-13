import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ErrorCard } from '../errorCard/ErrorCard'
import './TodoForm.css'

export const TodoForm = () => {
    const [title, setTitle] = useState('')
    const [error, setError] = useState(false)
    const dispatch = useDispatch()
    const addTodo = () => {
        if(title!=''){
        dispatch({
            type : 'ADD_TODO',
            payload: {
                id: (new Date).getTime(),
                title
            }
        })
        setTitle('')
    }
    else{
        setError(true)
    }
}

  return (
    <div className='todo-form'>
        <div className="fields">
            <input type="text" placeholder='Todo Name....' value={ title } onChange={ e => setTitle(e.target.value)}/>
            <button onClick={ addTodo }>ADD TODO</button>
        </div>
        {
            error &&  <ErrorCard setError = { setError } />
        }
       
    </div>
  )
}
