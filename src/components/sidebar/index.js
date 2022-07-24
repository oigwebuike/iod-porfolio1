import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import myLogo from '../../assets/images/sphere_wire.png'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 


const Sidebar = () => {
  return (
    <div className='nav-bar'>

        <Link className='logo' to='/'>
        <img src={myLogo} alt='logos'/>
        </Link>

        <nav>
          <NavLink exact='true' activeclassname='active' to='/'>
            <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
          </NavLink>
          <NavLink exact='true' activeclassname='active' to='/about' className='about-link'>
            <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
          </NavLink>
          <NavLink exact='true' activeclassname='active' to='/contact' className='contact-link'>
            <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
          </NavLink>
        </nav>
        <ul>
          <li>
            <a target='_blank' 
                rel='noreferrer' 
                href='https://www.linkedin.com/in/onyeka-daniel-igwebuike/'>
              <FontAwesomeIcon icon={faLinkedin} color='4d4d4e'/>
            </a>
          </li>
          <li>
            <a target='_blank' 
                rel='noreferrer' 
                href='https://github.com/oigwebuike'>
              <FontAwesomeIcon icon={faGithub} color='4d4d4e'/>
            </a>
          </li>
          
        </ul>


    </div>
  )
}

export default Sidebar