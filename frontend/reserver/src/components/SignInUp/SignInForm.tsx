"use client";

import { ChangeEvent, FormEvent } from "react";
import Input from "./Input";
import Button from "../Button";

interface SignInFormProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function SignInForm({
  handleSubmit,
  handleInput,
}: SignInFormProps) {
  return (
    <form onSubmit={handleSubmit}>
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
