import { useState } from 'react'
import './index.scss';
import LogoTitle from '../../assets/images/logo-s.png'
import React from 'react'
import { Link } from 'react-router-dom';
import AnimatedLetters from '../animatedLetters';

const Home = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['i', 'o', 'd', 'p', 'r', 'i', 'm', 'e']
  const jobArray = ['S','o', 'f','t', 'w','a','r', 'e', '', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']


  return (
    <div className="container home-page">

        <div className='text-zone'>
            <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i, </span>
            <br/>
            <span className={`${letterClass} _13`}>I </span>
            <span className={`${letterClass} _14`}>'m </span>


            <img src={LogoTitle} alt='developer'/>
        <AnimatedLetters letterClass={letterClass}
        strArray={nameArray}
        idx={15}/>
        <br/>
        <AnimatedLetters letterClass={letterClass}
        strArray={jobArray}
        idx={23}/> 
        </h1>
        <h2>Reactjs Developer / Python Developer / DevOps / Machine Learning Engineer</h2>
        <Link className="flat-button" to="/contact">Contact Me</Link>
        </div>
        
    </div>
  )
}

export default Home