import React from 'react'
import './index.scss'
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faAngular, faCss3, faJsSquare, faReact, faHtml5, faGitAlt } from '@fortawesome/free-brands-svg-icons'


const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => 
         
         setLetterClass('text-animate-hover'
         ), 4000)
     }, [])


  return (

    <div className="container about-page">
        <div className="text-zone">
            <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}

                />
            </h1>
            <p>I'm a Machine Learning Engineer with Masters in Embedded Systesm</p>
            <p>Very confident personality</p>
            <p>I strongly believe in deligence and hardwork</p>
        </div> 
        <div className='stage-cube-cont'>
            <div className='cube-spinner'>
                <div className="face1">
                    <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
                </div>
                <div className="face2">
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>

                </div>
                <div className="face3">
                    <FontAwesomeIcon icon={faHtml5} color="#F06529"/>

                </div>
                <div className="face4">
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>

                </div>
                <div className="face5">
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>

                </div>
                <div className="face6">
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>

                </div>
            </div>

        </div>

    </div>
  )
}

export default About