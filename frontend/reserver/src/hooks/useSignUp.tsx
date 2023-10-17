import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { DJANGO_URL } from "@/utils/consts";
import { toast } from "react-hot-toast";

export default function useSignUp() {
  const router = useRouter();

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

      const options = {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: { "Content-Type": "application/json" },
      };

      const response = await fetch(`${DJANGO_URL}/user/register/`, options);

      if (response.ok) router.push("/api/auth/signin");
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
