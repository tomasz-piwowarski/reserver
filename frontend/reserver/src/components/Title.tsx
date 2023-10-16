interface TitleProps {
  children: string;
  style?: string;
}

export default function Title({ children, style }: TitleProps) {
  return (
    <h1 className={`text-xl text-gray-600 font-semibold ${style}`}>
      {children}
    </h1>
  );
}
