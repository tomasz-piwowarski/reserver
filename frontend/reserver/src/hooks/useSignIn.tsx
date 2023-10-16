import { signIn } from "next-auth/react";
import { ChangeEvent, FormEvent, useState } from "react";

export default function useSignIn() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await signIn("credentials", {
        username: credentials.username,
        password: credentials.password,
        redirect: true,
        callbackUrl: "/reserver",
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return { handleInput, handleSubmit };
}
