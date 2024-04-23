import React from 'react'
import "./about.css"
import Us from "../assets/us.jpg"

const About = () => {
  return (
    <div className='AboutUs' id="AboutUs">
      <fieldset style={{width:"80%", textAlign:"center"}}>
        <legend><img src={Us} alt="" style={{display:"block"}} className='us-image'/></legend> <br /><br />
        <p>Welcome to <strong>Education Center</strong>, your premier destination for quality education in Milan, Italy.</p>
        <p>At Education Center, we are dedicated to providing top-notch educational programs and resources to help you succeed in your academic and personal goals.</p>
        <p>Located in the vibrant city of Milan, Italy, our center offers a diverse range of courses, workshops, and seminars tailored to meet the needs of students from all backgrounds.</p>
        <p>Join us at Education Center and embark on a journey of learning, growth, and discovery.</p>
        <p class="location">Location: Milan, Italy</p>
    </fieldset>
    </div>
  )
}

export default About
