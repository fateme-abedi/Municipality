import React from 'react'

function ChargeButton({ text }) {
  return (
    <div>
      <button className="flex justify-center items-center text-#fff font-medium rounded-[15px] bg-button-color m-1 mt-0 px-10  w-[8rem] py-3  ">
        {text}
      </button>
    </div>
  )
}

export default ChargeButton
