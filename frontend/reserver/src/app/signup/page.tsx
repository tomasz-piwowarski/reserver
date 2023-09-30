"use client";

import Spinner from "@/components/Spinner";
import SignUpForm from "../../components/SignUpForm";
import useSignUp from "@/hooks/useSignUp";

export default function SignUp(): JSX.Element {
  const { loading, handleSubmit } = useSignUp();

  return (
    <>{loading ? <Spinner /> : <SignUpForm handleSubmit={handleSubmit} />}</>
  );
}
