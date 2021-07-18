import React from 'react'
import { Link } from 'gatsby'

import projectStyles from '../style.module.css'
import styles from './o-l-d-header-white.module.css'

const OLDHeaderWhite = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container1}>
        <Link to="/products" className={styles.navlink}>
          <img
            src="/playground_assets/white%20mapso%20logo%20(a%20bit%20small)-1000h.png"
            className={` ${projectStyles.thqLink} ${styles.image} `}
          />
        </Link>
        <svg viewBox="0 0 1024 1024" className={styles.icon}>
          <path d="M384 928c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-53.019 42.981-96 96-96s96 42.981 96 96z"></path>
          <path d="M1024 928c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-53.019 42.981-96 96-96s96 42.981 96 96z"></path>
          <path d="M1024 512v-384h-768c0-35.346-28.654-64-64-64h-192v64h128l48.074 412.054c-29.294 23.458-48.074 59.5-48.074 99.946 0 70.696 57.308 128 128 128h768v-64h-768c-35.346 0-64-28.654-64-64 0-0.218 0.014-0.436 0.016-0.656l831.984-127.344z"></path>
        </svg>
        <div className={styles.nav}>
          <Link to="/products" className={` ${projectStyles.thqLink} ${styles.text} `}>
            PRODUCTS
          </Link>
          <Link to="/inquiries" className={` ${projectStyles.thqLink} ${styles.navlink1} `}>
            CONTACT
          </Link>
          <Link to="/explore" className={` ${projectStyles.thqLink} ${styles.navlink2} `}>
            EXPLORE
          </Link>
        </div>
      </div>
    </div>
  )
}

export default OLDHeaderWhite
