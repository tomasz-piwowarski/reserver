"use client";

interface IconButtonProps {
  text: string;
  onClick: () => void;
}

export default function IconButton({ text, onClick }: IconButtonProps) {
  return (
    <button
      onClick={() => {
        onClick();
      }}
      className="text-white w-2/5 h-full bg-indigo-900 rounded-xl shadow-bottom mb-8 border-solid border-b-4 border-indigo-950 active:border-0 active:shadow-none active:shadow-top-left-right"
    >
      {text}
    </button>
  );
}
