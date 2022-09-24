import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

export function Input(props: InputProps){
  return (
    <input 
    {...props}
    className="bg-zinc-900 py-3 px-4 rounded text-sm 
     placeholder:text-zinc-500 border-2 
     border-transparent focus:border-violet-500
     focus:outline-none"
     
     />
  )
}