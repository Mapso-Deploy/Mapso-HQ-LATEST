import React from 'react'

import Helmet from 'react-helmet'

import HeaderDark from '../components/header-dark'
import BitcoinBuyButtonTest from '../components/bitcoin-buy-button-test'
import projectStyles from '../style.module.css'
import styles from './inquiries.module.css'

const Inquiries = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Inquiries - Mapso</title>
        <meta name="description" content="You have arrived." />
        <meta property="og:title" content="Inquiries - Mapso" />
        <meta property="og:description" content="You have arrived." />
      </Helmet>
      <HeaderDark></HeaderDark>
      <form id="inquiries" name="contact-form" target="self" className={styles.form}>
        <h1 className={styles.text}>
          <span className={styles.text1}>INQUIRY E-FORM</span>
        </h1>
        <span className={styles.text2}>INPUT FULL NAME: </span>
        <input
          type="text"
          required="true"
          placeholder="e.g. code name"
          className={` ${projectStyles.thqTextInput} ${styles.textinput} `}
        />
        <span className={styles.span}>INPUT FULL EMAIL:</span>
        <input
          type="text"
          required="true"
          placeholder="e.g. encrypted email"
          className={` ${projectStyles.thqTextInput} ${styles.textinput1} `}
        />
        <span className={styles.span1}>INPUT MESSAGE TRANSCRIPTION:</span>
        <textarea
          placeholder="                                                                          e.g. status report"
          className={` ${projectStyles.thqTextArea} ${styles.textarea} `}
        ></textarea>
        <button className={` ${projectStyles.thqButton} ${styles.button} `}>SUBMIT</button>
      </form>
      <BitcoinBuyButtonTest></BitcoinBuyButtonTest>
    </div>
  )
}

export default Inquiries
