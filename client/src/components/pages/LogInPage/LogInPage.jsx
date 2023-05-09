import React , { useEffect }from 'react'
import styles from './LogInPage.module.css'
import { useLocation } from 'react-router-dom'

const LogInPage = () => {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <main className={styles['login-page']}>
        <div className={styles['login-container']}>
            <div className={styles['container-logo']}><img src="../../../../src/assets/img/logo-01.png" alt="/" /> </div>
            <div className={styles['container-title']}><h5>Log In</h5></div>
            <form className={styles['login-input-container']}>
                <input className={styles['input-name']} type="text" placeholder='email' />
                <input className={styles['input-email']} type="text"placeholder='password' />
            </form>
            <button  className={styles['input-submit-btn']} type="submit">Submit</button>
             <span className={styles['admin-hint']}>Admin Demo: admin@test.com | password2</span>
        </div>

    </main>
  )
}

export default LogInPage