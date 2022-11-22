import React from 'react'

function Button({ icon, text }) {
  return (
    <div className="flex-col   justify-center payBtn pt-10 pb-10   m-4 p-4 align-middle rounded-[25px] bg-button-color ">
      <div className="flex-auto icon"> {icon}</div>
      <span className="xl:text-lg mt-[3px] sm:text-sm">{text}</span>
    </div>
  )
}

export default Button
