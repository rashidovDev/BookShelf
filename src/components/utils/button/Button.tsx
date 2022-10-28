import React from 'react'

interface IButton {
  buttonName : string,
  class : string,
}

const Button : React.FC<IButton> = (props) => {
  return (
      <div className='flex justify-end'>
      <button className={`${props.class} rounded-[10px] md:w-[100px] w-[70px] text-[15px] md:text-[18px] py-1 px-2 my-2  text-[#fff]`}>
       {props.buttonName}
      </button>
      </div>
  )
}

export default Button