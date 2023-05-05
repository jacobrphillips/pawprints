import React from 'react'
import styles from './PetsFooter.module.css'

const PetsFooter = () => {
  return (
    <footer className={styles['footer-container']}>
      <div className={styles['footer-heading']}>
        <h6>made with &#9829; - designed & developed by Jacob Phillips &#169; 2023</h6>
      </div>
    </footer>
  )
}

export default PetsFooter