import React from 'react'
import { Link } from 'gatsby'

import CartComponentLight from './cart-component-light'
import projectStyles from '../style.module.css'
import styles from './header-light.module.css'

const HeaderLight = () => {
  return (
    <header className={styles.container}>
      <div className={styles.container1}>
        <Link to="/" className={styles.navlink}>
          <img
            src="/playground_assets/white%20mapso%20logo%20(a%20bit%20small)-1000h.png"
            className={` ${projectStyles.thqLink} ${styles.image} `}
          />
        </Link>
        <div className={styles.nav}>
          <Link to="/products" className={` ${projectStyles.thqLink} ${styles.text} `}>
            PRODUCTS
          </Link>
          <Link to="/inquiries" className={` ${projectStyles.thqLink} ${styles.navlink1} `}>
            INQUIRiES
          </Link>
          <Link to="/explore" className={` ${projectStyles.thqLink} ${styles.navlink2} `}>
            EXPLORE
          </Link>
        </div>
        <CartComponentLight></CartComponentLight>
      </div>
    </header>
  )
}

export default HeaderLight
