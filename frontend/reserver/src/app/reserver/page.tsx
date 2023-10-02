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
  return (
    <>
      {session.user.room ? (
        <Room userID={session.user.user_id} roomID={session.user.room.id} />
      ) : (
        <User />
      )}
    </>
  );
}
