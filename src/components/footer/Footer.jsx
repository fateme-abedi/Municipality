import React from 'react'
import imgbarcode from '../../images/barcode.png'
import imgpion from '../../images/pion.png'
import './Footer.css'

function Footer(props) {
  return (
    <div className="  z-100 bg-footer w-[80%] flex items-end h-[11rem] pr-[2rem] py-[2rem] pb-[2px] footer">
      <div className="w-[4rem] h-[4rem] ml-[2rem] barcode">
        <img src={imgbarcode} alt="barcode" />
      </div>
      <div className="ml-[2rem] w-[3.5rem] h-[3.5rem] pion">
        <img src={imgpion} alt="pion" />
      </div>
      <div className="text-white text-[2rem] ml-[2rem]  copy">&copy;</div>
    </div>
  )
}

export default Footer
