import React, { useState, useEffect } from 'react'
import styles from './Home.module.css'

const Home = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
    <section className={styles['home-container']}>
      <div className={styles['home-hero-container']}>
        <span className={styles['hero-statement']}><img className={styles['paw-home']} src="../../../../src/assets/img/paw.png" alt="paw" />pawprints <br/>Animal <span className={styles['shelter-highlight']}>Shelter</span></span>
      </div>
      <div className={styles['home-statement-container']}>
          <div className={styles['home-statement']}>
              <span>Since 2011, pawprints Animal Rescue has saved over 25,000 lives. With your help we can save even more.</span> 
          </div>
      </div>
      <div className={styles['home-buttons-container']}> 
        <div className={styles['facebook-button']}><a href="#"><i className="devicon-facebook-plain"></i></a></div>
        <div className={styles['twitter-button']}><a href="#"><i className="devicon-twitter-original"></i></a></div>
      </div>
      {windowWidth >= 1024 ? (
            <div className={styles["wide-dog-container"]}>
              <div className={styles['why-us-container']}>
                  <p>At pawprints, we provide a safe and loving environment for animals in need, offering adoption services to help them find their forever homes. Our experienced team is dedicated to the welfare of all animals and works tirelessly to ensure their health and happiness.</p>
              </div>
              <div className={styles["dog-picture-container"]}></div>
            </div>
      ) : ( <div className={styles["home-dog-picture-container"]}></div>) }
     
    </section>
  )
}

export default Home