import { getServerSession } from "next-auth/next";
import { options } from "../app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import { DJANGO_URL } from "@/utils/consts";

export default async function User() {
  const session = await getServerSession(options);

  if (!session || !session.user || !session.user.name)
    redirect("/api/auth/signin");

  const data = await fetch(`${DJANGO_URL}/api/reservations/check-user/`, {
    headers: { Authorization: `Bearer ${session.access}` },
  });

  const isRoom = await data.json();

  console.log(isRoom);

  if (isRoom.room) {
    const endTime = new Date(isRoom!.end_time).getTime();
    const startTime = new Date(isRoom!.start_time).getTime();

    redirect(
      `/timer/${isRoom.id}/${isRoom.room.room_name}/${startTime}/${endTime}`
    );
  }

  const user = session.user!.name;

  return <div>Hi {user}! Scan QR code to get to reserving room!</div>;
}
