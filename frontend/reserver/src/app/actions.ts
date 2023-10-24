"use server";

import { redirect } from "next/navigation";
import { DJANGO_URL } from "../utils/consts";

export const signUpUser = async (prevState: any, credentials: FormData) => {
  const options = {
    method: "POST",
    body: JSON.stringify({
      username: credentials.get("username"),
      password: credentials.get("password"),
    }),
    headers: { "Content-Type": "application/json" },
  };

  const response = await fetch(`${DJANGO_URL}/user/register/`, options);

  const data = await response.json();

  if (!response.ok) return { ...data, error: true };

  redirect("/api/auth/signin");
};
