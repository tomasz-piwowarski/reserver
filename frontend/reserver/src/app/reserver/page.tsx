import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import User from "@/components/User";
import Room from "@/components/Room";

export default async function Reserver() {
  const session = await getServerSession(options);

  if (!session || !session.user || !session.user.name)
    redirect("/api/auth/signin");

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
