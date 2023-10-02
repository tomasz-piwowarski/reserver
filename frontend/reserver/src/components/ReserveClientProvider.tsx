"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

interface ReserveClientProviderProps {
  children: JSX.Element;
  session: Session;
}

export default function ReserveClientProvider({
  children,
  session,
}: ReserveClientProviderProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
