import React from 'react'
import "./students.css"
import image1 from "../assets/potrait1.avif"
import image2 from "../assets/potrait2.jpeg"
import image7 from "../assets/potrait7.avif"
import image8 from "../assets/potrait8.jpeg"
import image9 from "../assets/potrait9.webp"

const Students = () => {
  return (
        <>
        <div className='container' id="Students"></div>
        <h1 style={{textAlign:"center"}}>Some Of Our Students</h1>
    <div className='Students' >
        
    <div className='allcards'>
    <div className='card' >
            <img src={image1} alt="" className='cardImage' />
            <h2 className="card-title">Gloria Silva</h2>
            <p className="card-text">At Educational Center, learning is an adventure of exploration, questioning, and discovery.</p>
    </div>
    <div className='card'>
            <img src={image2} alt="" className='cardImage' />
            <h2 className="card-title">Taniya Vaas</h2>
            <p className="card-text">Enrolling my child at Educational Center has sparked a newfound love for learning.</p>
    </div>
    <div className='card'>
            <img src={image7} alt="" className='cardImage' />
            <h2 className="card-title">Ayesh Shan</h2>
            <p className="card-text">Educational Center is a vibrant community of passionate educators and curious minds.</p>
    </div>
    <div className='card'>
            <img src={image8} alt="" className='cardImage' />
            <h2 className="card-title">Andre Smith</h2>
            <p className="card-text">My time at Educational Center equipped me with confidence and skills for the real world.</p>
    </div>
    <div className='card'>
            <img src={image9} alt="" className='cardImage' />
            <h2 className="card-title">Anura Singh</h2>
            <p className="card-text">Choosing Educational Center was the best decision for our child's education.</p>
    </div>

    </div>
    </div>
    </>
  )
}

export default Students
