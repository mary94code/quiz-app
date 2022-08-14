import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Main() {
  return (
    <div className='main__container'>
        <h1>Let`s play!</h1>
        <NavLink className="start_quiz_btn" to="/quizPage">Start quiz</NavLink>
    </div>
  )
}
