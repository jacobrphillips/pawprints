import React from 'react'
import styles from './SignInPage.module.css'

const SignInPage = () => {
  return (
    <main className={styles['sign-up-page']}>
        <div className={styles['sign-up-container']}>
            <div className={styles['container-logo']}></div>
            <div className={styles['container-title']}><h5>Sign Up</h5></div>
            <div className={styles['sign-up-input-container']}>
                <input className={styles['input-name']} type="text" placeholder='Name' />
                <input className={styles['input-email']} type="text"placeholder='Email' />
                <button  className={styles['input-submit-btn']} type="submit"></button>
            </div>
        </div>
    </main>
  )
}

export default SignInPage