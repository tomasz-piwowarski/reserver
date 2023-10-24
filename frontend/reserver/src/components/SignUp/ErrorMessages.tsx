interface ErrorMessagesProps {
  errors: string[];
}

export default function ErrorMessages({ errors }: ErrorMessagesProps) {
  return (
    <div>
      {errors.map((error: string) => (
        <p className="text-sm text-red-700 font-medium">{error}</p>
      ))}
    </div>
  );
}
