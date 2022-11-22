import React from 'react'
import { GrNotes } from 'react-icons/gr'
import Footer from '../footer/Footer'
function PayBill2(props) {
  return (
    <div className="p-5 pb-0 pr-0 text-white ">
      <div className="flex items-center mr-3 text-2xl text-white ">
        <div>
          <GrNotes size="3rem" color="white" />
        </div>
        <h1 className="mr-3">استعلام و پرداخت قبوض</h1>
      </div>

      <div className="w-[50%] mt-[8.5rem] text-white flex flex-col justify-center items-center payBill  m-auto  p-30 pb-0 mb-0">
        <div>
          <h1 className=" text-[17px] font-medium   text-white ">نوع قبض</h1>

          <select
            id="volume"
            className="h-10 mt-[20px]  mb-6 mr-0 rounded-[15px] bg-input b-none  p-5 text-lg text-#fff w-[20rem]"
          >
            <option value="choose" disabled>
              انتخاب{' '}
            </option>
            <option value="daily">روزانه</option>
            <option value="weekly">هفتگی</option>
            <option value="monthly">ماهانه</option>
          </select>
        </div>
        <div>
          <h1 className=" text-[17px] font-medium  text-white ">
            شناسه پرداخت
          </h1>

          <input
            type="text"
            className="h-10 mt-[20px]  mb-6 mr-0 rounded-[15px] bg-input b-none  p-5 text-lg text-#111 w-[20rem]"
          />
        </div>

        <div>
          <h1 className=" text-[17px] font-medium   text-white ">شناسه قبض </h1>

          <input
            type="text"
            className="h-10 mt-[20px]  mb-6 mr-0 rounded-[15px] bg-input b-none  p-5 text-lg text-#111 w-[20rem]"
          />
        </div>
        <div>
          <h1 className=" text-[17px] font-medium   text-white ">
            شماره تلفن{' '}
          </h1>

          <input
            type="phone"
            className="h-10 mt-[20px]  mb-6 mr-0 rounded-[15px] bg-input border-none  p-5 text-lg text-#111 w-[20rem]"
          />
        </div>
        <button
          id="pay-btn"
          className="flex justify-center items-center text-#fff font-medium rounded-[15px] bg-button-color m-1 mt-6 pl-10 pr-10 w-[12rem] pb-3 pt-3 "
        >
          استعلام{' '}
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default PayBill2
