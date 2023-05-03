import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles['footer-container']}>
      <div className={styles['footer-heading']}>
        <h6>made with &#9829; - designed & developed by Jacob Phillips &#169; 2023</h6>
      </div>
    </footer>
  )
}

export default Footer