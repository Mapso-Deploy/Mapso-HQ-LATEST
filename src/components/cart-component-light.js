
import React from 'react'
import Cart from '/static/cart-white.png'
import Spot from '/static/greendot.png'

const CartComponentLight = () => {
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
<img src={Spot}
 style={{ width: '10px', marginTop: '-14px'
}} /><img src={Cart} style={{
width: '42px'}}/>
</button>
</div>
</div>
)
}

export default CartComponentLight
