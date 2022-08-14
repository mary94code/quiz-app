import React from 'react'
import questions from '../Questions/questions'
import { NavLink } from 'react-router-dom'

export default function QuizPage() {
  const keys = Object.keys(questions)
  console.log(keys);
  return (
    <div className='quizpage__container'>
      {keys.map(item => (
        <div className='selection__container'>
          <h2> {questions[item].quizName}</h2>
          <img className='quizCont__img' src={questions[item].image} alt="" />
          <NavLink className="start__btn" to={`/quizPage/${item}`}>Start</NavLink>
        </div>

      ))}

    </div>
  )
}
