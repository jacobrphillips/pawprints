import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Adopt.module.css'

const Adopt = () => {

  const navigate = useNavigate();

  const clickEventHandler = () => {
    navigate('/pets');
  }

  return (
    <section id="adopt" className={styles['adopt-container']}>
      <div className={styles['adopt-header']}>
      <div className={styles['adopt-circle']}></div>
        <h6>adopt</h6>
      </div>
      <div className={styles['adopt-heading']}>
        <h3>25,000 dogs and cats have found loving homes and the number continues to grow.</h3>
      </div>
      <div className={styles['adopt-desc-container']}>
          <h6>Our Process <img src="../../../../src/assets/img/wuff-01.svg" alt="vision" /></h6>
          <p>Our bespoke adoption process is designed to find the best solution for adopters.</p>
          <button onClick={clickEventHandler} className={styles['adopt-btn']}>Start the Adoption Process</button>
        </div>
    </section>
  )
}

export default Adopt