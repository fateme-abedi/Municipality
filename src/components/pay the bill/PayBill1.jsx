import React from 'react'
import { GrNotes } from 'react-icons/gr'
import Footer from '../footer/Footer'
import payment from '../../images/projext/Group 3028.png'

function PayBill1(props) {
  return (
    <div className="p-5 pb-0 pr-0 text-white ">
      <div className="flex items-center mr-3 text-2xl text-white ">
        <div>
          <img src={payment} alt="payment" />
        </div>
        <h1 className="mr-3">استعلام و پرداخت قبوض </h1>
      </div>

      <div className=" w-[50%] mt-[2.75rem] text-white flex flex-col justify-center items-center payBill  m-auto  p-30 pb-0 mb-0  charge  ">
        <div className=" flex items-start justify-between mt-[15px] text-white  w-[60%] py-4   rounded-[12px] text-[23px] font-medium bill">
          <div className="  md:w-[50%]  bg-input rounded-[12px] mt-[3.5rem] py-6 px-4 desc flex items-center">
            <h1>
              استعلام Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur perspiciatis fugit quibusdam vero non esse laborum
            </h1>
          </div>
          <div className="w-[2px]  h-[26rem] bg-white rounded-[12px] color-white mx-10 line"></div>
          <div className="flex-col items-center justify-center payBtn mr-[3rem]  ">
            <h3 id="price" className="mb-2">
              درگاه بانکی مورد نظر را انتخاب کنید{' '}
            </h3>
            <div className="bg-input ml-6 w-[8rem] h-[8rem] rounded-[15px] mt-4">
              dargah 1
            </div>
            <div className="bg-input mt-8 ml-6 w-[8rem] h-[8rem] rounded-[15px]">
              dargah 2
            </div>
            <button
              id="pay-btn"
              className="flex justify-center items-center text-#fff  rounded-[15px] bg-button-color m-1 mt-[5.5rem] px-[20px] w-[12rem]  py-2 pay"
            >
              پرداخت{' '}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PayBill1
