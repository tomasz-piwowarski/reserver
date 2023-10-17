"use client";

import Spinner from "@/components/Spinner";
import useSignIn from "@/hooks/useSignIn";
import SignInForm from "./SignInForm";

export default function SignInClient() {
  const { handleInput, handleSubmit, loading } = useSignIn();

  return (
    <div className="bg-white w-full">
      {loading ? (
        <div className="flex justify-center">
          <Spinner />
        </div>
      ) : (
        <SignInForm handleSubmit={handleSubmit} handleInput={handleInput} />
      )}
    </div>
  );
}
