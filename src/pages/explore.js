import React from 'react'

import HeaderLight from '../components/header-light'
import BitcoinBuyButtonTest from '../components/bitcoin-buy-button-test'

const Explore = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'block',
        overflow: 'auto',
        boxShadow: '5px 5px 10px 0px #d4d4d4',
        minHeight: '100vh',
        paddingTop: '0',
        paddingLeft: '0',
        paddingRight: '0',
        backgroundColor: '#eeeeee',
      }}
    >
      <HeaderLight></HeaderLight>
      <iframe
        src="https://cascadr.co/blogs/cozykev"
        allowFullScreen="true"
        style={{
          top: '0px',
          left: 'auto',
          right: '0px',
          width: '100%',
          zIndex: '2',
          overflow: 'hidden',
          marginTop: '-91',
          minHeight: '121vh',
        }}
      ></iframe>
      <BitcoinBuyButtonTest></BitcoinBuyButtonTest>
    </div>
  )
}

export default Explore
