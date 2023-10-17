import { ChangeEvent, FormEvent } from "react";
import Input from "./Input";
import Button from "../Button";

interface SignUpProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function SignUpForm({ handleSubmit, handleInput }: SignUpProps) {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Input
        label="Username"
        type="text"
        placeholder="Your username"
        id="username"
        handleInput={handleInput}
      />
      <Input
        label="Password"
        type="password"
        placeholder="Your password"
        id="password"
        handleInput={handleInput}
      />
      <div className="w-full">
        <Button>submit</Button>
      </div>
    </form>
  );
}
