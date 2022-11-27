import React from 'react'
import { BsFillSdCardFill } from 'react-icons/bs'
import Footer from '../footer/Footer'
import InternetButton from './InternetButton'
import internetImg from '../../images/projext/Group 3032.png'

function BuyInternet2(props) {
  const internetPacks = [
    {
      text: '1روزه 3 گیگابایت ',
      price: '15000تومان ',
    },
    {
      text: '1روزه 3 گیگابایت ',
      price: '15000تومان ',
    },
    {
      text: '1روزه 3 گیگابایت ',
      price: '15000تومان ',
    },
    {
      text: '1روزه 3 گیگابایت ',
      price: '15000تومان ',
    },
    {
      text: '1روزه 3 گیگابایت ',
      price: '15000تومان ',
    },
    {
      text: '1روزه 3 گیگابایت ',
      price: '15000تومان ',
    },
    {
      text: '1روزه 3 گیگابایت ',
      price: '15000تومان ',
    },
    {
      text: '1روزه 3 گیگابایت ',
      price: '15000تومان ',
    },
  ]
  return (
    <div className="p-5 pb-0 pr-0 text-white ">
      <div className="flex items-center mr-3 text-2xl text-white ">
        <div>
          <img src={internetImg} alt="internt" />
        </div>
        <h1 className="mr-3">خرید بسته اینترنتی</h1>
      </div>

      <div className="w-[50%] mt-[6.5rem] text-white flex flex-col justify-center items-center payBill  m-auto  p-30 pb-0 mb-0">
        <div>
          <div>
            <h1 className=" text-[20px] font-medium   text-white ">
              مهلت استفاده از بسته
            </h1>
            <select
              id="time"
              className="h-10 mt-[20px]  mb-3 mr-0 rounded-[15px] bg-input b-none  p-5 text-lg text-#111 w-[20rem]"
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
            <h1 className=" text-[20px] font-medium   text-white ">
              حجم ترافیک عادی
            </h1>

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
        </div>
        <div className=" grid place-content-center place-items-center sm:grid-cols-2 xl:gap-x-[12rem] md:gap-x-[14rem]  sm:gap-x-[11rem] gap-y-[1rem] p-10 md:grid-cols-2   xl:grid-cols-4 ">
          {internetPacks.map(({ text, price }) => {
            return <InternetButton text={text} price={price} />
          })}
        </div>
        <button
          id="pay-btn"
          className="flex justify-center items-center text-#fff font-medium rounded-[15px] bg-button-color m-1 mt-9 pl-10 pr-10 w-[12rem] pb-3 pt-3 "
        >
          مرحله بعد{' '}
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default BuyInternet2
