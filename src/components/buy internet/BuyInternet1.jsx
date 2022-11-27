import React from 'react'
import { BsFillSdCardFill } from 'react-icons/bs'
import Footer from '../footer/Footer'
import internetImg from '../../images/projext/Group 3032.png'
function BuyInternet1(props) {
  return (
    <div className="p-5 pb-0 pr-0 text-white">
      <div className="flex items-center mr-3 text-2xl text-white ">
        <div>
          <img src={internetImg} alt="internt" />
        </div>
        <h1 className="mr-3">خرید بسته اینترنتی</h1>
      </div>

      <div className="w-[50%] my-[10rem] text-white flex flex-col justify-center items-center payBill  m-auto  p-30 pb-0">
        <div>
          <h1 className=" text-[20px] font-medium   text-white ">
            شماره تلفن همراه
          </h1>

          <input
            type="phone"
            className="h-10 mt-[20px]  mb-6 mr-0 rounded-[15px] bg-input b-none  p-5 text-lg text-#111 w-[20rem]"
          />
        </div>

        <div>
          <h1 className=" text-[20px] font-medium   text-white ">
            تکرار شماره تلفن همراه
          </h1>

          <input
            type="phone"
            className="h-10 mt-[20px]  mb-6 mr-0 rounded-[15px] bg-input b-none  p-5 text-lg text-#111 w-[20rem]"
          />
        </div>
        <button
          id="pay-btn"
          className="flex justify-center items-center text-#fff font-medium rounded-[15px] bg-button-color m-1 mt-4 pl-10 pr-10 w-[12rem] pb-3 pt-3 "
        >
          مرحله بعد{' '}
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default BuyInternet1
