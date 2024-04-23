import React from 'react'
import "../Components/contact.css"

const Contact = () => {
  return (
    <div className='Contacts' id='ContactUs'>
      
      <div className='one'>
        
            <p>Call us at +39 06 1234567</p><br />
            <p>Email : info@educationcenter.com</p> <br />
            <p>Address : Via Milano 123 <br /> 20121 Milan <br /> Italy</p>

        
      </div>
      <div className='two'>
        <p>Folow Us On FaceBook : <a href="#">EducationalCenter</a></p> <br />
        <p>Follow Us On Instagram : <a href="#">EducationalCenter_Milano</a></p><br />
              </div>

    </div>
  )
}

export default Contact
