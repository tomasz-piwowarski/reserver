"use client";

import Input from "../Input";
import Button from "../Button";
import { FIELDS, FORM_NAME } from "@/utils/signUpFormConstants";
import { signUpUser } from "@/app/actions";

import { experimental_useFormStatus as useFormStatus } from "react-dom";
//@ts-expect-error
import { experimental_useFormState as useFormState } from "react-dom";
import ErrorMessages from "./ErrorMessages";

const initialState = {
  username: null,
  password: null,
};

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" aria-disabled={pending}>
      submit
    </Button>
  );
}

export default function SignUpForm() {
  const [state, formAction] = useFormState(signUpUser, initialState);
  console.log(state);
  return (
    <form data-testid={FORM_NAME} action={formAction}>
      <div className="mb-6">
        <Input
          label={FIELDS.username.label}
          type={FIELDS.username.type}
          placeholder={FIELDS.username.placeholder}
          id={FIELDS.username.id}
          validation={FIELDS.username.validators}
        />
        {state.error && state.username ? (
          <ErrorMessages errors={state.username} />
        ) : null}
      </div>
      <div className="mb-6">
        <Input
          label={FIELDS.password.label}
          type={FIELDS.password.type}
          placeholder={FIELDS.password.placeholder}
          id={FIELDS.password.id}
          validation={FIELDS.password.validators}
        />
        {state.error && state.password ? (
          <ErrorMessages errors={state.password} />
        ) : null}
      </div>
      <div className="w-full">
        <SubmitButton />
      </div>
    </form>
  );
}
