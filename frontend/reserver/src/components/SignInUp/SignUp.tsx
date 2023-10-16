"use client";

import SignUpForm from "@/components/SignInUp/SignUpForm";
import Spinner from "@/components/Spinner";
import useSignUp from "@/hooks/useSignUp";

export default function SignUp() {
  const { loading, handleSubmit } = useSignUp();

  return (
    <div className="bg-white">
      <SignUpForm handleSubmit={handleSubmit} />
    </div>
  );
}
