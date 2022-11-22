import React from 'react'
import Button from './Button'
import '../../App.css'
import { AiFillBank, AiFillCar } from 'react-icons/ai'
import { BsFillSdCardFill, BsSdCard, BsWallet2, BsPaypal } from 'react-icons/bs'
import { IoMdWallet } from 'react-icons/io'

function Buttons(props) {
  const buttons = [
    { icon: <AiFillBank size="3rem" className="icon" />, text: 'پرداخت قبض' },
    { icon: <BsFillSdCardFill size="3rem" />, text: 'شارژ' },
    { icon: <BsSdCard size="3rem" />, text: 'خریدبسته' },
    { icon: <IoMdWallet size="3rem" />, text: 'کیف پول همدارندگی' },
    { icon: <BsWallet2 size="3rem" />, text: 'کیف پول شهروندی' },
    { icon: <AiFillBank size="3rem" />, text: 'باشگاه مشتریان' },
    { icon: <BsPaypal size="3rem" />, text: 'درگاه اینترنتی' },
    { icon: <AiFillCar size="3rem" />, text: 'عوارضی' },
  ]
  return (
    <div className="grid-cols-4 row-span-2 gap-16 p-10 buttons w-90">
      {buttons.map(({ icon, text }) => {
        return <Button icon={icon} text={text} />
      })}
    </div>
  )
}

export default Buttons
