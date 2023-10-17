import Container from "@/components/Container";
import SignInClient from "@/components/SignInUp/SignInClient";
import SignInUpContainer from "@/components/SignInUp/SignInUpContainer";
import Title from "@/components/Title";
import Link from "next/link";

export default function SignIn() {
  return (
    <Container style="lg:w-1/3 lg:h-4/5 mx-5 lg:m-0">
      <SignInUpContainer>
        <Title style="mb-8">Sign in</Title>
        <div className="w-full">
          <SignInClient />
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
