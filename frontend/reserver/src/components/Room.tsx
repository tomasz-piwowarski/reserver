import { getServerSession } from "next-auth";
import QR from "./QR";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

interface RoomProps {
  userID: number;
  roomID: number;
}

export default async function Room({ userID, roomID }: RoomProps) {
  const session = await getServerSession(options);

  if (!session || !session.user || !session.user.name)
    redirect("/api/auth/signin");

  const data = await fetch(
    `${process.env.DJANGO_URL}/api/rooms/check-room/${roomID}/`,
    { headers: { Authorization: `Bearer ${session.access}` } }
  );

  const isRoom = await data.json();
  console.log(isRoom);
  if (isRoom.room) {
    const endDate = new Date(isRoom!.end_time).getTime();
    redirect(`/timer/${roomID}/${endDate}`);
  }

  return (
    <div
      style={{ height: "auto", margin: "0 auto", maxWidth: 256, width: "100%" }}
    >
      <QR value={`http://localhost:3000/reserve/${userID}/${roomID}`} />
    </div>
  );
}
