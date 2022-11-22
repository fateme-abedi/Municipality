import React from 'react'
import ChargeButton from './ChargeButton'
import { BsFillSdCardFill } from 'react-icons/bs'
import Footer from '../footer/Footer'

function Charge(props) {
  const prices = [
    { price: 2.0 },
    { price: 5.0 },
    { price: 10.0 },
    { price: 20.0 },
    { price: 50.0 },
    { price: 100.0 },
  ]
  return (
    <div className="p-5 pb-0 pr-0 text-white">
      <div className="flex items-center mr-3 text-2xl text-white ">
        <div>
          <BsFillSdCardFill size="3rem" color="white" />
        </div>
        <h1 className="mr-3">خرید شارژ</h1>
      </div>

      <div className="w-[50%] mt-[10.25rem] text-white flex flex-col justify-center items-center payBill  m-auto  p-30 pb-0 mb-0 charge">
        <div>
          <h1 className=" text-[20px] font-medium   text-white ">
            شماره تلفن همراه
          </h1>

          <input
            type="phone"
            className="h-10 mt-[20px]  mb-3 mr-0 rounded-[15px] bg-input b-none  p-5 text-lg text-#111 w-[22rem]"
          />
        </div>

        <div className="mt-[1rem]">
          <h1 className="text-[20px] font-medium text-white pr-[2rem]">
            انتخاب مبلغ شارژ
          </h1>

          <div className="grid-cols-3 mt-4 text-white chargeBtn w-50">
            {prices.map(({ price }) => {
              return <ChargeButton text={`${price}.000`} />
            })}
          </div>
        </div>
        <div className="mt-[1rem]">
          <h1 className="my-2   text-[20px] font-medium  text-white ">
            مبلغ دلخواه
          </h1>

          <input
            type="number"
            className="h-10 mt-2  mb-6 mr-0 rounded-[15px] bg-input b-none  p-5 text-lg text-#111 w-[22rem]"
          />
        </div>

        <button
          id="pay-btn"
          className="flex justify-center items-center text-#fff font-medium rounded-[15px] bg-button-color m-1 mt-6  px-15 w-[12rem] py-3  text-[1.25rem]"
        >
          پرداخت{' '}
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default Charge
