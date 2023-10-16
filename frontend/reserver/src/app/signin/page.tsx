"use client";

import Container from "@/components/Container";
import SignInForm from "@/components/SignInUp/SignInForm";
import SignInUpContainer from "@/components/SignInUp/SignInUpContainer";
import Title from "@/components/Title";
import useSignIn from "@/hooks/useSignIn";
import Link from "next/link";

export default function SignIn() {
  const { handleInput, handleSubmit } = useSignIn();

  return (
    <Container style="lg:w-1/3 lg:h-4/5 mx-5 lg:m-0">
      <SignInUpContainer>
        <Title style="mb-8">Sign in</Title>
        <div className="w-full">
          <SignInForm handleInput={handleInput} handleSubmit={handleSubmit} />
          <div className="flex justify-center mt-8">
            <Link href="/">
              <p className="text-sm text-center">
                <span>Don't have an account?</span>
                <button className="font-semibold ml-2">Sign up here!</button>
              </p>
            </Link>
          </div>
        </div>
      </SignInUpContainer>
    </Container>
  );
}
