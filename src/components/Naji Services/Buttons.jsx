import React from 'react'
import Button from './Button'
import '../../App.css'
import { AiFillBank, AiFillCar } from 'react-icons/ai'
import { BsFillSdCardFill, BsSdCard, BsWallet2, BsPaypal } from 'react-icons/bs'
import { IoMdWallet } from 'react-icons/io'
import stopImg from '../../images/projext/Group 3049.png'
import licenseImg from '../../images/projext/Group 3051.png'
import licenseNegImg from '../../images/projext/Group 3053.png'
import pelakImg from '../../images/projext/Group 3054.png'
import descImg from '../../images/projext/description_FILL1_wght400_GRAD0_opsz48.png'
import noExitImg from '../../images/projext/gpp_bad_FILL1_wght400_GRAD0_opsz48.png'
import passportImg from '../../images/projext/Group 3057.png'
import stopCircleImg from '../../images/projext/Group 3059.png'

function Buttons(props) {
  const buttons = [
    {
      icon: <img src={stopImg} alt="services" className="icon" />,
      text: 'استعلام خلافی',
    },
    {
      icon: <img src={licenseImg} alt="services" className="icon" />,
      text: 'وضعیت گواهینامه',
    },
    {
      icon: <img src={licenseNegImg} alt="services" className="icon" />,
      text: 'استعلام نمره منفی گواهینامه',
    },
    {
      icon: <img src={pelakImg} alt="services" className="icon" />,
      text: 'استعلام پلاک',
    },
    {
      icon: <img src={descImg} alt="services" className="icon" />,
      text: 'استعلام کارت و سند',
    },
    {
      icon: <img src={noExitImg} alt="services" className="icon" />,
      text: 'استعلام ممنوع الخروجی',
    },
    {
      icon: <img src={passportImg} alt="services" className="icon" />,
      text: 'وضعیت گذرنامه',
    },
    {
      icon: <img src={stopCircleImg} alt="services" className="icon" />,
      text: 'تجمیع تخلفات',
    },
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
