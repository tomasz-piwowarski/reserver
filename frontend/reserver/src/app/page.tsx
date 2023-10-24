import SignUp from "@/components/SignUp/SignUpClient";
import Link from "next/link";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Container from "@/components/Container";
import SignInUpContainer from "@/components/SignInUpContainer";
import Title from "@/components/Title";
import { DJANGO_URL } from "@/utils/consts";
import { redirect } from "next/navigation";

export default async function Home() {
  return (
    <Container style="lg:flex-row lg:w-4/6 lg:h-4/5 my-10 mx-5 lg:m-0">
      <SignInUpContainer style="lg:w-1/2">
        <Title style="mb-8">Create account</Title>
        <div className="w-full">
          <SignUp />
          <div className="flex justify-center mt-8">
            <Link href="/signin">
              <p className="text-sm text-center">
                <span>Already have an account?</span>
                <button className="font-semibold ml-2">Log in here!</button>
              </p>
            </Link>
          </div>
        </div>
      </SignInUpContainer>
      <HowItWorks />
    </Container>
  );
}
