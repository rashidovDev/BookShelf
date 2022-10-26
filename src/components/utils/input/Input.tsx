import React from "react";

interface IInput {
    type : string,
    placeholder : string,
    value : string,
    setValue : React.Dispatch<React.SetStateAction<string>>
}


const Input : React.FC<IInput> = (props) => {
    return (
        <div className="flex justify-center">
            <input 
                   className="p-2 outline-none w-[90%] m-auto px-5 text-[#777] my-3 rounded-[10px]"
                   onChange={(event : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=> 
                   props.setValue(event.target.value)}
                   value={props.value}
                   type={props.type}
                   placeholder={props.placeholder}/>
        </div>
    );
};

export default Input;