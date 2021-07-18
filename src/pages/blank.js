import React from 'react'

import Helmet from 'react-helmet'

import styles from './blank.module.css'

const Blank = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Blank - Mapso</title>
        <meta name="description" content="You have arrived." />
        <meta property="og:title" content="Blank - Mapso" />
        <meta property="og:description" content="You have arrived." />
      </Helmet>
    </div>
  )
}

export default Blank
