import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import jwtDecode from "jwt-decode";
import { DJANGO_URL } from "@/utils/consts";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentialns",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "Your username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Your password",
        },
      },
      async authorize(credentials) {
        const options = {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        };

        const res = await fetch(`${DJANGO_URL}/api/token/`, options);

        const data = await res.json();

        if (!res.ok) {
          throw new Error("Invalid credentials");
        }

        return data;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }

      return token;
    },
    async session({ session, token }) {
      session.user = jwtDecode(token.user!.access!);
      return { ...session, access: token.user!.access! };
    },
  },
  pages: {
    signIn: "/signin",
  },
};
