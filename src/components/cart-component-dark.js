import React from 'react'
import Cart from '/static/cart.png'

const CartComponentDark = () => {
  return (
    <div
      style={{
        top: '0px',
        left: 'auto',
        right: '0px',
        bottom: 'auto',
        height: '81px',
        display: 'flex',
        position: 'absolute',
        alignSelf: 'flex-end',
        alignItems: 'center',
        flexShrink: '1',
        flexDirection: 'row',
        justifyContent: 'center',
        background: 'transparent'
      }}
    >
      <div
        style={{
          width: '68px',
          height: '30px',
          display: 'flex',
          alignSelf: 'center',
          alignItems: 'center',
          marginLeft: '42px',
          marginRight: '50px',
          flexDirection: 'row',
          justifyContent: 'center',
          background: 'transparent'
        }}
      >
<button className="snipcart-checkout" style={{
          width: '68px',
          cursor: 'pointer',
          height: '30px',
          display: 'flex',
          alignSelf: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          background: 'transparent'
        }}>
<span style={{
          fontSize: '9px', display: 'flex', lineHeight: '20px'}}>Items .</span><img src={Cart} style={{
          width: '42px'}}/>
</button>
      </div>
    </div>
    
  )
}

export default CartComponentDark