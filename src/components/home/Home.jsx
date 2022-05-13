import React from 'react'
import { AllTodos } from '../allTodos/AllTodos'
import { CompletedTodos } from '../completedTodos/CompletedTodos'
import { TodoForm } from '../todoForm/TodoForm'
import './Home.css'

export const Home = () => {
  return (
    <div className='background'>
            <div className="todo-card">
                        <h2>My Todos</h2>
                            <TodoForm />
                            <AllTodos />
                            <CompletedTodos />
            </div>
    </div>
  )
}
