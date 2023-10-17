import { signIn } from "next-auth/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-hot-toast";

export default function useSignIn() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await signIn("credentials", {
        username: credentials.username,
        password: credentials.password,
        redirect: false,
        callbackUrl: "/reserver",
      });

      if (!response!.ok) throw new Error(response!.error ?? "Unknown error");

      toast.success("Signed in successfully!");
    } catch (error: any) {
      if (error) {
        toast.error(error.message);
      } else {
        toast.error("An error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return { handleInput, handleSubmit, loading };
}
