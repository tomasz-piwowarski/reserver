interface SignInUpContainerProps {
  children: JSX.Element | JSX.Element[];
  style?: string;
}

export default function SignInUpContainer({
  children,
  style,
}: SignInUpContainerProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center w-full h-full p-12 lg:p-20 ${style}`}
    >
      {children}
    </div>
  );
}
