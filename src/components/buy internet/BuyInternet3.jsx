import React from 'react'
import { BsFillSdCardFill } from 'react-icons/bs'
import Footer from '../footer/Footer'

function BuyInternet3(props) {
  return (
    <div className="p-5 pb-0 pr-0 text-white">
      <div className="flex items-center mr-3 text-2xl text-white ">
        <div>
          <BsFillSdCardFill size="3rem" color="white" />
        </div>
        <h1 className="mr-3">خرید بسته اینترنتی</h1>
      </div>
      <div className="w-[50%] mt-[8.75rem] text-white flex flex-col justify-center items-center payBill  m-auto  p-30 pb-0 mb-0">
        <div className="facture">
          <h1 className=" text-[22px] text-white ">
            فاکتور خرید بسته اینترنتی
          </h1>

          <div className="flex items-center justify-between mt-[15px] text-white bg-button-color  px-4 py-8 rounded-[12px] text-[23px] font-medium facture">
            <div className="border-l-4 pl-[5rem]">
              <h3 id="phone">شماره تلفن همراه :</h3>
              <h3 id="number">0987654321</h3>
              <h3 id="volume">بسته 1 روزه 3 گیگابایت</h3>
            </div>
            <div className="px-[2rem]">
              <h3 id="price">10.000</h3>
              <h3>تومان </h3>
            </div>
          </div>
        </div>
        <div className="sm:pl-[4rem] lg:pl-[3rem] payGate ">
          <h1 className=" text-[22px]   text-white mt-4 ">درگاه پرداخت</h1>

          <div className="flex pr-6  mt-[1.5rem] justify-center">
            <div className="bg-input ml-6 w-[9rem] h-[9rem] rounded-[12px] bank">
              dargah 1
            </div>
            <div className="bg-input ml-6 w-[9rem] h-[9rem] rounded-[12px] bank">
              dargah 2
            </div>
          </div>
        </div>

        <button
          id="pay-btn"
          className="flex justify-center items-center text-#fff font-medium rounded-[15px] bg-button-color m-1 mt-6 px-18  w-[12rem] py-2  text-[1.25rem]"
        >
          پرداخت{' '}
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default BuyInternet3
