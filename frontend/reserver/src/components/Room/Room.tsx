import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import { DJANGO_URL } from "@/utils/consts";
import QRContainer from "./QRContainer";
import Container from "../Container";
import Title from "../Title";

interface RoomProps {
  userID: number;
  roomID: number;
  roomName: string;
}

export default async function Room({ userID, roomID, roomName }: RoomProps) {
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

    redirect(`/timer/${roomID}/${roomName}/${startTime}/${endTime}`);
  }

  return (
    <Container style="w-screen lg:w-1/3 lg:h-4/5 mx-5 lg:m-0">
      <div className="flex flex-col justify-center mx-auto lg:w-full md:w-1/2 w-full p-12 lg:p-24">
        <Title style="mb-4 text-gray-900 text-2xl mx-auto">{roomName}</Title>
        <QRContainer
          roomName={roomName}
          value={`http://localhost:3000/reserve/${roomName}/${userID}/${roomID}`}
          roomID={roomID}
          access={session.access}
        />
      </div>
    </Container>
  );
}
