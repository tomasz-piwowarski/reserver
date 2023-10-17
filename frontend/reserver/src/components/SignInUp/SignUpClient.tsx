"use client";

import SignUpForm from "@/components/SignInUp/SignUpForm";
import Spinner from "@/components/Spinner";
import useSignUp from "@/hooks/useSignUp";

export default function SignUp() {
  const { loading, handleSubmit, handleInput } = useSignUp();

  return (
    <div className="bg-white w-full">
      {loading ? (
        <div className="flex justify-center">
          <Spinner />
        </div>
      ) : (
        <SignUpForm handleSubmit={handleSubmit} handleInput={handleInput} />
      )}
    </div>
  );
}
