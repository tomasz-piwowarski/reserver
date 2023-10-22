import { ChangeEvent, FormEvent } from "react";
import Input from "./Input";
import Button from "../Button";
import { FIELDS } from "@/utils/signUpFormConstants";

interface SignUpProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function SignUpForm({ handleSubmit, handleInput }: SignUpProps) {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Input
        label={FIELDS.username.label}
        type={FIELDS.username.type}
        placeholder={FIELDS.username.placeholder}
        id={FIELDS.username.id}
        handleInput={handleInput}
      />
      <Input
        label={FIELDS.password.label}
        type={FIELDS.password.type}
        placeholder={FIELDS.password.placeholder}
        id={FIELDS.password.id}
        handleInput={handleInput}
      />
      <div className="w-full">
        <Button>submit</Button>
      </div>
    </form>
  );
}
