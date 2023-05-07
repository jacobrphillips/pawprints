import React , { useEffect }from 'react'
import styles from './SignInPage.module.css'
import { useLocation } from 'react-router-dom'

const SignInPage = () => {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <main className={styles['sign-up-page']}>
        <div className={styles['sign-up-container']}>
            <div className={styles['container-logo']}><img src="../../../../src/assets/img/logo-01.png" alt="/" /> </div>
            <div className={styles['container-title']}><h5>Sign Up</h5></div>
            <div className={styles['sign-up-input-container']}>
                <input className={styles['input-name']} type="text" placeholder='Name' />
                <input className={styles['input-email']} type="text"placeholder='email@email.com' />
            </div>
            <button  className={styles['input-submit-btn']} type="submit">Submit</button>
            <span className={styles['user-hint']}>User Demo: User | user@test.com</span>
             <span className={styles['admin-hint']}>Admin Demo: Admin | admin@test.com</span>
        </div>

    </main>
  )
}

export default SignInPage