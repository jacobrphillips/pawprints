import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './AdminHeader.module.css'

const AdminHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();

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
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <header className={styles.header}>
      <div className={styles['logo-container']}>
        <img className={styles['header-logo']} src="/src/assets/img/logo-01.png" alt="pawprints-logo" />
      </div>
      {windowWidth >= 1024 ? (
        <nav className={styles['nav-long']}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to='/upload' >Upload</Link></li>
          </ul>
          <button className={styles['login-btn-long']}><Link to="/login">Log In</Link></button>
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
              <li onClick={toggleHamburgerMenu}><Link to="/">Home</Link></li>
              <li onClick={toggleHamburgerMenu}><Link to="/upload">Upload</Link></li>
            </ul>
            <button className={styles['login-btn']}><Link to="/login">Log In</Link></button>
          </nav>
        </div>
      )}
      {isOpen && <div className={styles.overlay} onClick={toggleHamburgerMenu}></div>}
    </header>
  );
}

export default AdminHeader