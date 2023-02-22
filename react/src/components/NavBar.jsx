import React from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';

export default function NavBar() {

  const navRef = useRef();

  const {user, token, notification, setUser, setToken} = useStateContext();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  }

  return (
    <>
    <header>
        <h2>
          <Link to={'/'}>Sparkling Event</Link>
        </h2>
        <nav ref={navRef}>
            {user && token ? (
              <>
              <Link to={'/dashboard'} >Dashboard</Link>
              <Link to={'/profile'} >Profile</Link>
              </>
            ) : (
              <>
              <Link to={'/login'} >Login</Link>
              <Link to={'/signup'} >Register</Link>
              </>
            )
            }
            <button className='nav-btn nav-class-btn' onClick={showNavbar}>
                <FaTimes/>
            </button>
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
            <FaBars/>
        </button>
    </header>
    </>
  )
}
