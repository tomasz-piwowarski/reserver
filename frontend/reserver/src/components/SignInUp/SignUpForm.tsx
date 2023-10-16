import Button from "../Button";
import Input from "./Input";

interface SignUpProps {
  handleSubmit: (formData: FormData) => void;
}

export default async function SignUpForm({
  handleSubmit,
}: SignUpProps): Promise<JSX.Element> {
  return (
    <form action={handleSubmit}>
      <Input
        label="Username"
        type="text"
        placeholder="Your username"
        id="username"
      />
      <Input
        label="Password"
        type="password"
        placeholder="Your password"
        id="password"
      />
      <div className="w-full">
        <Button>submit</Button>
      </div>
    </form>
  );
}
