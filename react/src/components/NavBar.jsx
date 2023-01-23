import React from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import { useRef } from 'react';

export default function NavBar() {

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  }

  return (
    <>
    <header>
        <h2>Logo</h2>
        <nav ref={navRef}>
            <a href="/#">Home</a>
            <a href="/#">My work</a>
            <a href="/#">Blog</a>
            <a href="/#">About</a>
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
