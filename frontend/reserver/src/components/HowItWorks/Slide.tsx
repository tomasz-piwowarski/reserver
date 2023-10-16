import { Transition } from "@headlessui/react";

interface UserSlideProps {
  children: JSX.Element;
}

export default function Slide({ children }: UserSlideProps) {
  return (
    <Transition
      appear={true}
      show={true}
      enter="transition-opacity duration-200"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      {children}
    </Transition>
  );
}
