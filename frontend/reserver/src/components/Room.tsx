import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import { DJANGO_URL } from "@/utils/consts";
import QRContainer from "./QRContainer";

interface RoomProps {
  userID: number;
  roomID: number;
}

export default async function Room({ userID, roomID }: RoomProps) {
  const session = await getServerSession(options);

  if (!session || !session.user || !session.user.name)
    redirect("/api/auth/signin");

  const data = await fetch(
    `${DJANGO_URL}/api/reservations/check-room/${roomID}/`,
    {
      headers: { Authorization: `Bearer ${session.access}` },
    }
  );

  const isRoom = await data.json();

  if (isRoom.room) {
    const endTime = new Date(isRoom!.end_time).getTime();
    const startTime = new Date(isRoom!.start_time).getTime();

    redirect(`/timer/${roomID}/${startTime}/${endTime}`);
  }

  return (
    <div
      style={{ height: "auto", margin: "0 auto", maxWidth: 256, width: "100%" }}
    >
      <QRContainer
        value={`http://localhost:3000/reserve/${userID}/${roomID}`}
        roomID={roomID}
        access={session.access}
      />
    </div>
  );
}
