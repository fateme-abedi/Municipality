import React from 'react'
import Buttons from './Buttons'
import Text from './Text'
import Footer from './../footer/Footer'

function Payment(props) {
  return (
    <div className="p-5 pb-0 pr-0 text-white">
      <div className=" text-white mr-[5px] p-10 text-2xl flex items-center">
        logo
      </div>
      <div className="flex items-center justify-between p-10 pt-0 payment">
        <Text />
        <Buttons />
      </div>
      <Footer />
    </div>
  )
}

export default Payment
