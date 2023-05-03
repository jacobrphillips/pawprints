import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import styles from './Header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleHamburgerMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles['logo-container']}>
        <img className={styles['header-logo']} src="/src/assets/img/logo-01.png" alt="pawprints-logo" />
      </div>
      {windowWidth >= 1024 ? (
        <nav className={styles['nav-long']}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#adopt">Adopt</a></li>
            <li><Link to="/pets">Pets</Link></li>
          </ul>
          <button className={styles['sign-up-btn-long']}>Sign Up</button>
        </nav>
      ) : (
        <div className={styles['hamburger-container'] + (isOpen ? ` ${styles.active}` : '')}>
          <button className={styles.hamburger} onClick={toggleHamburgerMenu}>
            <div id={styles['bar-1']} className={`${styles.bar} ${isOpen ? styles.open1 : ''}`}></div>
            <div id={styles['bar-2']} className={`${styles.bar} ${isOpen ? styles.open2 : ''}`}></div>
            <div id={styles['bar-3']} className={`${styles.bar} ${isOpen ? styles.open3 : ''}`}></div>
          </button>
          <nav className={styles['header-menu']}>
            <ul>
              <li><a href="#" onClick={toggleHamburgerMenu}>Home</a></li>
              <li><a href="#about" onClick={toggleHamburgerMenu}>About</a></li>
              <li><a href="#adopt" onClick={toggleHamburgerMenu}>Adopt</a></li>
              <li><a href="#" onClick={toggleHamburgerMenu}>Pets</a></li>
            </ul>
            <button className={styles['sign-up-btn']}>Sign Up</button>
          </nav>
        </div>
      )}
      {isOpen && <div className={styles.overlay} onClick={toggleHamburgerMenu}></div>}
    </header>
  );
};

export default Header;
