import { ChangeEvent } from "react";

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  id: string;
  handleInput?: (e: ChangeEvent<HTMLInputElement>) => void;
  styles?: string;
  validation?: {};
}

export default function Input({
  label,
  handleInput,
  type,
  placeholder,
  id,
  styles,
  validation,
}: InputProps) {
  return (
    <div className="flex flex-col">
      <label className="text-sm text-gray-500 font-medium" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={id}
        id={id}
        className={`border-solid border-b-2 border-gray-300 py-2 outline-none focus:border-black ${styles}`}
        onChange={handleInput}
        {...validation}
      />
    </div>
  );
}
