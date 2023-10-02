import { getServerSession } from "next-auth/next";
import { options } from "../app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export default async function User() {
  const session = await getServerSession(options);

  if (!session) redirect("/api/auth/signin");

  const user = session.user!.name;

  return <div>Hi {user}! Scan QR code to get to reserving room!</div>;
}
