interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: string;
}

export default function Button({ type, onClick, children }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full capitalize bg-black text-white p-2 rounded-md"
    >
      {children}
    </button>
  );
}
