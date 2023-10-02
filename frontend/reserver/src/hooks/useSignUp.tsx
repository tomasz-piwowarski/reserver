import { useRouter } from "next/navigation";
import { useState } from "react";
import { DJANGO_URL } from "@/utils/consts";

export default function useSignUp() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(formData: FormData): Promise<void> {
    setLoading(true);

    const options = {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: { "Content-Type": "application/json" },
    };

    try {
      await fetch(`${DJANGO_URL}/user/register/`, options);

      router.push("/api/auth/signin");
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }

  return { handleSubmit, loading };
}
