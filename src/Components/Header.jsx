import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Header() {
  return (
    <div>
      <header>
       <nav>
       <NavLink to="/"><img className='logo_img' src="/images/house-logo.svg" alt="quiz_logo" /></NavLink> 
        <ul>
            <li><NavLink className="nav__link" to="/quizPage">All quizes</NavLink></li>
            <li><NavLink className="nav__link" to="/">Main page</NavLink></li>
        </ul>
       </nav>
      </header>
    </div>
  )
}
