import React from 'react'
import { Link } from 'gatsby'

import Helmet from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './index.module.css'

const Landing = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Mapso</title>
        <meta name="description" content="You have arrived." />
        <meta property="og:title" content="Mapso" />
        <meta property="og:description" content="You have arrived." />
      </Helmet>
      <Link to="/products" className={styles.navlink}>
        <img
          id="logo"
          alt="M Logo"
          src="/playground_assets/logo%20(classic%20revised).svg"
          className={` ${projectStyles.thqLink} ${styles.image} `}
        />
      </Link>
    </div>
  )
}
 
export default Landing
