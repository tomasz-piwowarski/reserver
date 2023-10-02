import { getServerSession } from "next-auth/next";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import User from "@/components/User";
import Room from "@/components/Room";

export default async function Reserver() {
  const session = await getServerSession(options);

  if (!session || !session.user || !session.user.name)
    redirect("/api/auth/signin");

  const user = session.user!.name;
  console.log(session);
  return (
    <>
      {session.user.room ? (
        <Room user={session.user.user_id} room={session.user.room.id} />
      ) : (
        <User />
      )}
    </>
  );
}
