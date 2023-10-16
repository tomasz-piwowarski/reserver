interface ContainerProps {
  children: JSX.Element[] | JSX.Element;
  style?: string;
}

export default function Container({ children, style }: ContainerProps) {
  return (
    <div
      className={`flex flex-col justify-center bg-white w-full rounded-3xl drop-shadow-xl ${style}`}
    >
      {children}
    </div>
  );
}
