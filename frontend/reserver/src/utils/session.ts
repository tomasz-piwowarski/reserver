import { options } from "@/app/api/auth/[...nextauth]/options";
import { Session, User, getServerSession } from "next-auth";
import { redirect } from "next/navigation";

interface SessionUserExists extends Session {
  user: User;
}

export async function getSessionOrRedirect(): Promise<SessionUserExists> {
  "use server";
  const session = await getServerSession(options);

  if (!session?.user?.name) redirect("/signin");

  return session as SessionUserExists;
}
