import React from 'react'

interface IButton {
  buttonName : string,
  class : string,
}

const Button : React.FC<IButton> = (props) => {
  return (
      <div className='flex justify-end'>
      <button className={`${props.class} rounded-[10px] text-[18px] py-1 px-3 my-2`}>
       {props.buttonName}
      </button>
      </div>
  )
}

export default Button