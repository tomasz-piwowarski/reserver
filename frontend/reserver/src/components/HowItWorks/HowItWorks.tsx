"use client";

import { MainButtons, NormalButtons } from "./Buttons";
import RoomSlides from "./RoomSlides";
import UserSlides from "./UserSlides";
import useHowItWorks from "@/hooks/useHowItWorks";

function Main() {
  return (
    <>
      <h2 className="z-40 text-white mb-8 text-2xl font-semibold">
        How does it work?
      </h2>
    </>
  );
}

export default function HowItWorks() {
  const items = [...UserSlides, <Main />, ...RoomSlides];

  const { prevSlide, nextSlide, currentIndex } = useHowItWorks(items);

  return (
    <div className="flex flex-col h-[520px] justify-center items-center bg-gradient-to-t from-indigo-800 to-gray-900 to-90% relative overflow-hidden z-10 lg:h-full lg:w-1/2 lg:rounded-r-3xl">
      <div className="flex flex-col justify-center items-center lg:h-2/5 w-full z-40">
        {items[currentIndex]}
      </div>
      <div
        className={`flex justify-around items-center w-3/5 h-1/4 mx-auto z-40 ${
          currentIndex !== 4 ? "lg:pt-40" : ""
        }`}
      >
        {currentIndex === 4 ? (
          <MainButtons nextSlide={nextSlide} prevSlide={prevSlide} />
        ) : (
          <NormalButtons nextSlide={nextSlide} prevSlide={prevSlide} />
        )}
      </div>
      {/* <div className="bg-red-800 h-52 w-52 rounded-tl-full absolute bottom-0 right-0 z-20"></div> */}
    </div>
  );
}
