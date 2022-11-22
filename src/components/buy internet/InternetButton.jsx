import React from 'react'

function InternetButton({ text, price }) {
  return (
    <div>
      <button className="flex items-center justify-between text-#fff font-medium rounded-[15px] bg-button-color  mr-[8px] px-2  w-[15rem] py-4  ">
        <span>{text}</span>
        <span>{price}</span>
      </button>
    </div>
  )
}

export default InternetButton
