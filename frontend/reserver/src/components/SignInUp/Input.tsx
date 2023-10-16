import { ChangeEvent } from "react";

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  id: string;
  handleInput?: (e: ChangeEvent<HTMLInputElement>) => void;
  styles?: string;
}

export default function Input({
  label,
  handleInput,
  type,
  placeholder,
  id,
  styles,
}: InputProps) {
  return (
    <div className="flex flex-col mb-6">
      <label className="text-sm text-gray-500 font-medium" htmlFor="username">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={id}
        id={id}
        className={`border-solid border-b-2 border-gray-300 py-2 outline-none focus:border-black ${styles}`}
        onChange={handleInput}
      />
    </div>
  );
}
