"use client";

import Spinner from "@/components/Spinner";
import SignUpForm from "../../components/SignInUp/SignUpForm";
import useSignUp from "@/hooks/useSignUp";

export default function SignUp(): JSX.Element {
  const { loading, handleSubmit } = useSignUp();

  return (
    <div className="bg-white">
      <SignUpForm handleSubmit={handleSubmit} />
    </div>
  );
}
