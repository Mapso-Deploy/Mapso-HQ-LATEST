import React from 'react'

import styles from './bitcoin-buy-button-test.module.css'

import BTC from '/static/-51615829990l4wkek1wjf.png'





const BitcoinBuyButtonTest = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container1}>
      <a href="https://btcpaymerchant.com/apps/32ji79KDmguSoduz9hDnEEgNBSXD/pos">
  <img src={BTC} style={{
width: '142px', boxShadow: "0px 0px 777px 0px #FFA500"}}/>
</a>
      </div>
      
    </div>
  )
}

export default BitcoinBuyButtonTest
