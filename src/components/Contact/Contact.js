import './Contact.css'

import emailjs from 'emailjs-com';
import React from 'react';
const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_0nw78vb', 'template_nsee33k', e.target, 
                                  'g2L2Zgh4V3xWzEbpT')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }
  return (
      
       <div className='container'>
         <form onSubmit={sendEmail} className='contact-form'>
            <h3>Having Any Queries?</h3>
            <h2>Contact Us</h2>
            <input type='text' placeholder='Your Name' name='name'/>
            <input type='email' placeholder='Your Email' name='email'/>
            <input type='text' placeholder='Subject' name='subject'/>
              <textarea rows="8" placeholder='How Can We Help You ? ' name='message'/>
            <button type='submit' className='btn'>Submit</button>

         </form>
       </div>
      
   
  )
}

export default Contact  