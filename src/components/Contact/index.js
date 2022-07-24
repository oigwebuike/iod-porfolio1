import React, { useRef } from 'react'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import emailjs from '@emailjs/browser'


const Contact = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
      setTimeout(() => 
       
       setLetterClass('text-animate-hover'
       ), 4000)
   }, [])

  const sendEmail = (e) => {

  e.preventDefault()

  emailjs.sendForm('gmail', 'template_myxmraj', refForm.current, 'vv5T-iBS5SHsfjDKD')
          .then(() => {
          alert('Message sent')
          window.location.reload(false)
        },
        () => {
          alert('Operation failed')
        }
      ) 
  }
  

  return (
    <div className="container contact-page">
       <div className="text-zone">
            <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                    idx={15}

                />
            </h1>
            <p>I'm a Machine Learning Engineer with Masters in Embedded Systesm</p>
            <p>Very confident personality</p>
            <p>I strongly believe in deligence and hardwork</p>
            <div className='contact-form'>
              <form ref={refForm} onSubmit={sendEmail}>
                <ul>
                  <li className='half'>
                    <input type='text' name='name' placeholder='Name' required />
                  </li>
                  <li className='half'>
                    <input type='email' name='email' placeholder='Email' required />
                  </li>
                  <li>
                    <input type='text' name='subject' placeholder='Subject' required />
                  </li>
                  <li>
                    <textarea name='message' placeholder='Message' required></textarea>
                  </li>
                  <li>
                    <input type='submit' className='flat-button' value='Send' />
                  </li>
                </ul>
              </form>
        </div>
        </div> 
       
    </div>
  )
}

export default Contact