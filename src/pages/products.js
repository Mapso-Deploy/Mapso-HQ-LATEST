import React from "react"

import HeaderDark from "../components/header-dark"
import BitcoinBuyButtonTest from "../components/bitcoin-buy-button-test"

import '@google/model-viewer';

const Test = () => {
return (

<model-viewer interaction-prompt="none" src='/product.glb' camera-controls min-camera-orbit="auto 90deg auto" max-camera-orbit="auto 90deg 7.699m" min-field-of-view="45deg" max-field-of-view="auto" camera-orbit="-90deg 90deg 7.699m" poster="poster.png" auto-rotate>

    <div class="progress-bar hide" slot="progress-bar">
        <div class="update-bar"></div>
    </div>
    <button slot="ar-button" id="ar-button">
        View in your space
    </button>
    {/* <div id="ar-prompt">
        <img src="https://modelviewer.dev/shared-assets/icons/hand.png" />
    </div> */} 
</model-viewer>

)
}


const Fuck12tee = () => {
  return (
  
  <model-viewer src='/product.glb' camera-controls min-camera-orbit="auto 90deg auto" max-camera-orbit="auto 90deg 7.699m" min-field-of-view="45deg" max-field-of-view="auto" camera-orbit="-90deg 90deg 7.699m" poster="poster.png" auto-rotate>
  
  <div class="progress-bar hide" slot="progress-bar">
  <div class="update-bar"></div>
  </div>
  <button slot="ar-button" id="ar-button">
  View in your space
  </button>
  {/* <div id="ar-prompt">
  <img src="https://modelviewer.dev/shared-assets/icons/hand.png" />
  </div> */}
  </model-viewer>
  
  )
  }



const Products = () => {
  return (
    <div
      style={{
        width: "auto",
        height: "fit-content",
        display: "flex",
        flexGrow: "1",
        overflow: "scroll",
        boxShadow: "5px 5px 10px 0px #d4d4d4",
        minHeight: "100vh",
        alignItems: "center",
        flexShrink: "1",
        alignContent: "#eeeeee",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <HeaderDark></HeaderDark>
      <div
        style={{
          flex: "0 0 auto",
          width: "100%",
          height: "638px",
          display: "flex",
          overflow: "scroll",
          marginTop: "50px",
          alignItems: "center",
          paddingTop: "50px",
          marginBottom: "50px",
          flexDirection: "column",
          paddingBottom: "50px",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            flex: "0 0 auto",
            display: "flex",
            alignItems: "center",
            overflow: "scroll",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              width: "283px",
              height: "319px",
              display: "flex",
              opacity: "0.08",
              overflow: "hidden",
              marginTop: "20px",
              alignItems: "center",
              paddingTop: "20px",
              paddingLeft: "20px",
              marginBottom: "20px",
              paddingRight: "20px",
              flexDirection: "column",
              paddingBottom: "20px",
              justifyContent: "center",
              backgroundColor: "rgba(217, 217, 217, 0)",
            }}
          >

<Fuck12tee style={{
width: "952px",
height: "638px",
}}/>
          </div>
          <div
            style={{
              width: "283px",
              height: "319px",
              display: "flex",
              opacity: "0.08",
              overflow: "hidden",
              marginTop: "20px",
              alignItems: "center",
              paddingTop: "20px",
              marginRight: "35px",
              paddingLeft: "20px",
              marginBottom: "20px",
              paddingRight: "20px",
              flexDirection: "column",
              paddingBottom: "20px",
              justifyContent: "center",
              backgroundColor: "rgba(217, 217, 217, 0)",
            }}
          >
<Test style={{
width: "952px",
height: "638px",
}}/>
          </div>
          <div
            style={{
              width: "283px",
              height: "319px",
              display: "flex",
              opacity: "0.08",
              overflow: "hidden",
              marginTop: "20px",
              alignItems: "center",
              paddingTop: "20px",
              paddingLeft: "20px",
              marginBottom: "20px",
              paddingRight: "20px",
              flexDirection: "column",
              paddingBottom: "20px",
              justifyContent: "center",
              backgroundColor: "rgba(217, 217, 217, 0)",
            }}
          >
<Test style={{
width: "952px",
height: "638px",
}}/>
          </div>
        </div>
        <div
          style={{
            flex: "0 0 auto",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "283px",
              height: "319px",
              display: "flex",
              opacity: "0.08",
              overflow: "hidden",
              marginTop: "20px",
              alignItems: "center",
              paddingTop: "20px",
              paddingLeft: "20px",
              marginBottom: "20px",
              paddingRight: "20px",
              flexDirection: "column",
              paddingBottom: "20px",
              justifyContent: "center",
              backgroundColor: "rgba(217, 217, 217, 0)",
            }}
          >
<Test style={{
width: "952px",
height: "638px",
}}/>
          </div>
          <div
            style={{
              width: "283px",
              height: "319px",
              display: "flex",
              opacity: "0.08",
              overflow: "hidden",
              marginTop: "20px",
              alignItems: "center",
              paddingTop: "20px",
              marginRight: "35px",
              paddingLeft: "20px",
              marginBottom: "20px",
              paddingRight: "20px",
              flexDirection: "column",
              paddingBottom: "20px",
              justifyContent: "center",
              backgroundColor: "rgba(217, 217, 217, 0)",
            }}
          >
<Test style={{
width: "952px",
height: "638px",
}}/>
          </div>
          <div
            style={{
              width: "283px",
              height: "319px",
              display: "flex",
              opacity: "0.08",
              overflow: "hidden",
              marginTop: "20px",
              alignItems: "center",
              paddingTop: "20px",
              paddingLeft: "20px",
              marginBottom: "20px",
              paddingRight: "20px",
              flexDirection: "column",
              paddingBottom: "20px",
              justifyContent: "center",
              backgroundColor: "rgba(217, 217, 217, 0)",
            }}
          >
<Test style={{
width: "952px",
height: "638px",
}}/>
          </div>
        </div>
      </div>
      <BitcoinBuyButtonTest></BitcoinBuyButtonTest>
    </div>
  )
}

export default Products
