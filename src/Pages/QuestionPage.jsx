import React, { useState } from 'react'
import questions from '../Questions/questions'
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom'




export default function QuestionPage() {
  const { type } = useParams()
  const quizQuestions = questions[type]['questions'];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [result, setResult] = useState(0);
  const [showResult, setShowResult] = useState(0)

  const [answered, setAnswered] = useState(false)
  const [correct, setCorrect] = useState(false)
  const [answerIndex, setAnswerIndex] = useState(0)



  const answerHandler = (isCorrect, index) => {
    setAnswered(true)

    if(answered) return;

    setAnswerIndex(index)
    setCorrect(isCorrect)

    if (isCorrect) {
      setResult(Math.round(result + 100 / quizQuestions.length))
    } 

    setTimeout(() => {
      setAnswered(false)

      if (quizQuestions.length - 1 === currentQuestion) {
        setShowResult(true)
  
      } else {
        setCurrentQuestion(currentQuestion + 1)
      }
    }, 2000)

  }

  return (
    <div>

      {showResult ? (
        <div className='results__container'>
          <p className='score'>your result is: {result}% correct answers</p>
          <NavLink className="new__quiz" to="/quizPage">New quiz</NavLink>
        </div>
      ) : (
        <div className='questions__container'>

          <h2>Question: {currentQuestion + 1}</h2>
          <p>{quizQuestions[currentQuestion].question}</p>
          <img className="quizQuestion_img" src={quizQuestions[currentQuestion].image} />
          <div className="answers__btn">
            {quizQuestions[currentQuestion].answers.map((item, key) => (
              <button className={answered && answerIndex === key ? correct ? 'correct_answer' : 'incorrect_answer' : ''} onClick={() => answerHandler(item.isCorrect, key)}>{item.answer}</button>
            ))}</div>
          <br />

        </div>
      )}

    </div>
  )
}
