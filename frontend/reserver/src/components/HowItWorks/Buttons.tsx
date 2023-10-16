import IconButton from "./IconButton";

interface ButtonProps {
  nextSlide: () => void;
  prevSlide: () => void;
}

export function MainButtons({ nextSlide, prevSlide }: ButtonProps) {
  return (
    <>
      <IconButton text="User" onClick={prevSlide} />
      <IconButton text="Room" onClick={nextSlide} />
    </>
  );
}

export function NormalButtons({ nextSlide, prevSlide }: ButtonProps) {
  return (
    <>
      <button
        className="bg-indigo-900 w-12 rounded-xl shadow-bottom border-solid border-b-4 border-indigo-950 active:border-0 active:shadow-none active:shadow-top-left-right"
        onClick={() => prevSlide()}
      >
        <svg
          className="fill-white mx-auto"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z" />
        </svg>
      </button>
      <button
        className="bg-indigo-900 w-12 rounded-xl shadow-bottom border-solid border-b-4 border-indigo-950 active:border-0 active:shadow-none active:shadow-top-left-right"
        onClick={() => nextSlide()}
      >
        <svg
          className="fill-white mx-auto"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
        </svg>
      </button>
    </>
  );
}
