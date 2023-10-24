import ReserveClient from "@/components/ReserveClient/ReserveClient";
import { getSessionOrRedirect } from "@/utils/session";
import { checkIfRoomReservedOrRedirect } from "@/utils/room";

interface ReserveProps {
  params: {
    roomName: string;
    roomUserID: string;
    roomID: string;
  };
}

export default async function Reserve({ params }: ReserveProps) {
  const session = await getSessionOrRedirect();

  await checkIfRoomReservedOrRedirect({
    roomID: params.roomID,
    roomName: params.roomName,
    token: session.access,
  });

  return (
    <ReserveClient
      roomID={params.roomID}
      roomName={params.roomName}
      token={session.access}
    />
  );
}
