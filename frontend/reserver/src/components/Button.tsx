interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: string;
  style?: string;
}

export default function Button({
  type,
  onClick,
  children,
  style,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full capitalize bg-black text-white p-2 rounded-md ${style}`}
    >
      {children}
    </button>
  );
}
