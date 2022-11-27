import React from 'react'
import Button from './Button'
import '../../App.css'

import paybillImg from '../../images/projext/Group 3028.png'
import chargeImg from '../../images/projext/Group 3030.png'
import packImg from '../../images/projext/Group 3032.png'
import accountImg from '../../images/projext/account_balance_wallet_FILL1_wght400_GRAD0_opsz48.png'
import walletImg from '../../images/projext/wallet_FILL1_wght400_GRAD0_opsz48.png'
import bankImg from '../../images/projext/account_balance_FILL1_wght400_GRAD0_opsz48.png'
import creditImg from '../../images/projext/credit_score_FILL1_wght400_GRAD0_opsz48.png'
import garageImg from '../../images/projext/garage_FILL1_wght400_GRAD0_opsz48.png'
function Buttons(props) {
  const buttons = [
    {
      icon: <img src={paybillImg} alt="services" className="icon" />,
      text: 'پرداخت قبض',
    },
    {
      icon: <img src={chargeImg} alt="services" className="icon" />,
      text: 'شارژ',
    },
    {
      icon: <img src={packImg} alt="services" className="icon" />,
      text: 'خریدبسته',
    },
    {
      icon: <img src={accountImg} alt="services" className="icon" />,
      text: 'کیف پول همدارندگی',
    },
    {
      icon: <img src={walletImg} alt="services" className="icon" />,
      text: 'کیف پول شهروندی',
    },
    {
      icon: <img src={bankImg} alt="services" className="icon" />,
      text: 'باشگاه مشتریان',
    },
    {
      icon: <img src={creditImg} alt="services" className="icon" />,
      text: 'درگاه اینترنتی',
    },
    {
      icon: <img src={garageImg} alt="services" className="icon" />,
      text: 'عوارضی',
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
