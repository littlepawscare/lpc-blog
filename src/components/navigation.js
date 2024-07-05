import React from 'react'

import * as styles from './navigation.module.css'
import logo from '../images/LPC_logo.png';

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <a href="https://littlepawscare.com" className={styles.logoLink}>
      <img src={logo} alt="Little Paws Care Logo" className={styles.logo} />
      <span className={styles.navigationItem}>Little Paws Care</span>
    </a>
    {/* <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/" activeClassName="active">
          Blog
        </Link>
      </li>
    </ul> */}
  </nav>
)

export default Navigation
