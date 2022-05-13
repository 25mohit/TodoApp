import React from 'react'
import './ErrorCard.css'

export const ErrorCard = ( {setError}) => {
  const closeError = () => {
    setError(false)
  }
  return (
    <div className='error-div'>
        <div className="error-card">
                <button onClick={ closeError }>X</button>
                <p className='erroe-p'>Please write something TODO....</p>

        </div>
    </div>
  )
}
