import React from 'react'

import styles from './o-l-d-header.module.css'

const OLDHeader = () => {
  return (
    <header className={styles.container}>
      <div className={styles.container1}>
        <img src="/playground_assets/logo%20(classic%20revised).svg" className={styles.image} />
        <svg viewBox="0 0 1024 1024" className={styles.icon}>
          <path d="M384 928c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-53.019 42.981-96 96-96s96 42.981 96 96z"></path>
          <path d="M1024 928c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-53.019 42.981-96 96-96s96 42.981 96 96z"></path>
          <path d="M1024 512v-384h-768c0-35.346-28.654-64-64-64h-192v64h128l48.074 412.054c-29.294 23.458-48.074 59.5-48.074 99.946 0 70.696 57.308 128 128 128h768v-64h-768c-35.346 0-64-28.654-64-64 0-0.218 0.014-0.436 0.016-0.656l831.984-127.344z"></path>
        </svg>
        <div className={styles.nav}>
          <span className={styles.text}>PRODUCTS</span>
          <span className={styles.text1}>CONTACT</span>
          <span className={styles.text2}>EXPLORE</span>
        </div>
      </div>
    </header>
  )
}

export default OLDHeader
