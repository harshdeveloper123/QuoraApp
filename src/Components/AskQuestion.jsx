//this code is totally dedicated to Ask question box which is on the home screen of Quora app.

import React from 'react'
import './AskQuestion.css'

const AskQuestion = ({handleOpen}) => {
  return (
    <div className='QuestionBox'>
        <input type="text" placeholder='What do you want to ask or Share' className='QuestionInput' />
        <div className="QuestionButtons">
        <button onClick={handleOpen}>Ask</button>
        <button>Answer</button>
        <button onClick={handleOpen}>Post</button>
        </div>
    </div>
  )
}

export default AskQuestion