import React from 'react'
import "./hero.css"
import img from "../assets/book.svg"

const Homepage = () => {
  return (
    <div className='everything' id='Home'>
      <div className='container'>
        <div className='right'>
          <h1>"Educating the mind without educating the heart is no education at all." - Aristotle</h1>
          
        </div>
        <div className='left'>
        <img src={img} alt="" style={{height:"500px"}} className='book' />
        </div>
      </div>
    </div>
  )
}

export default Homepage
