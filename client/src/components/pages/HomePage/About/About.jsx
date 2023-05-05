import React from 'react'
import styles from './About.module.css'

const About = () => {
  return (
    <section id="about" className={styles['about-container']}>
      <div className={styles['about-header']}>
        <div className={styles['about-circle']}></div>
        <h6>about</h6>
      </div>
      <div className={styles['about-heading']}>
        <h3>About pawprints Animal Rescue</h3>
      </div>
      <div className={styles['about-statements']}>
        <div className={styles['our-mission-container']}>
          <h6>Our Mission <img src="../../../../src/assets/img/rocket_launch_FILL0_wght400_GRAD0_opsz48.svg" alt="rocket" /></h6>
          <p>Rescuing and providing a safe haven for animals in need, while promoting responsible pet ownership and advocating for animal welfare.</p>
        </div>
        <div className={styles['our-vision-container']}>
          <h6>Our Vision  <img src="../../../../src/assets/img/eye-1.svg" alt="vision" /></h6>
          <p>Our vision is to create a world where all animals are treated with respect, compassion, and kindness, and where every animal has a safe and loving home.</p>
        </div>
        <div className={styles['our-philosophy-container']}>
          <h6>Our Philosophy <img src="../../../../src/assets/img/pets_FILL0_wght400_GRAD0_opsz48.svg" alt="vision" /></h6>
          <p>All animals deserve to live a life free from abuse, neglect, and cruelty, and we are committed to doing everything in our power to help them find happiness and wellbeing.</p>
        </div>
      </div>
    </section>
  )
}

export default About
