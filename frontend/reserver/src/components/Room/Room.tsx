import { NEXT_URL } from "@/utils/consts";
import QRContainer from "./QRContainer";
import Container from "../Container";
import Title from "../Title";
import { getSessionOrRedirect } from "@/utils/session";
import { checkIfRoomReservedOrRedirect } from "@/utils/room";

interface RoomProps {
  userID: number;
  roomID: number;
  roomName: string;
}

export default async function Room({ userID, roomID, roomName }: RoomProps) {
  const session = await getSessionOrRedirect();

  await checkIfRoomReservedOrRedirect({
    roomID,
    roomName,
    token: session.access,
  });

  return (
    <Container style="w-screen lg:w-1/3 lg:h-4/5 mx-5 lg:m-0">
      <div className="flex flex-col justify-center mx-auto lg:w-full md:w-1/2 w-full p-12 lg:p-24">
        <Title style="mb-4 text-gray-900 text-2xl mx-auto">{roomName}</Title>
        <QRContainer
          roomName={roomName}
          value={`${NEXT_URL}/reserve/${roomName}/${userID}/${roomID}`}
          roomID={roomID}
          access={session.access}
        />
      </div>
    </Container>
  );
}
