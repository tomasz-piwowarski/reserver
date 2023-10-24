import { useState } from "react";

export default function useHowItWorks(items: JSX.Element[]) {
  const [currentIndex, setCurrentIndex] = useState(4);

  const nextSlide = () => {
    if (currentIndex === items.length - 1) return;
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    if (currentIndex === 0) return;
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  return { nextSlide, prevSlide, currentIndex };
}
