import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/event logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking on a menu item (mobile)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={isScrolled ? 'scrolled' : ''}>
      {/* Mobile menu toggle button */}
      <button 
        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation menu */}
      <ul className={isMenuOpen ? 'active' : ''}>
        <li onClick={closeMenu}>Home</li>
        <li onClick={closeMenu}>About</li>
        <li onClick={closeMenu}>Event</li>
        <li onClick={closeMenu}>Timeline</li>
        <li onClick={closeMenu}>SCOREBOARD</li>
      </ul>
    </nav>
  )
}

export default Navbar