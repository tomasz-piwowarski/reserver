import { redirect } from "next/navigation";
import { useState } from "react";
import { DJANGO_URL } from "@/utils/const";

export default function useSignUp() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData): Promise<void> {
    setLoading(true);

    const options = {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: { "Content-Type": "application/json" },
    };

    try {
      await fetch(`${DJANGO_URL}/user/register/`, options);

      redirect("/api/auth/signin");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return { handleSubmit, loading };
}
