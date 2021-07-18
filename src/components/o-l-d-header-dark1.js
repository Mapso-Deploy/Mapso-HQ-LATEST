import React from 'react'
import { Link } from 'gatsby'

import CartComponentDark from './cart-component-dark'
import projectStyles from '../style.module.css'
import styles from './o-l-d-header-dark1.module.css'

const OLDHeaderDark1 = () => {
  return (
    <header className={styles.container}>
      <div className={styles.container1}>
        <Link to="/" className={styles.navlink}>
          <img
            src="/playground_assets/logo%20(classic%20revised).svg"
            className={` ${projectStyles.thqLink} ${styles.image} `}
          />
        </Link>
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
      <CartComponentDark></CartComponentDark>
    </header>
  )
}

export default OLDHeaderDark1
