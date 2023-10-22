import { redirect } from "next/navigation";
import { DJANGO_URL } from "./consts";

interface checkIfRoomReservedOrRedirectArgs {
  roomID: number | string;
  token: string;
  roomName: string;
}

export const checkIfRoomReservedOrRedirect = async ({
  roomID,
  token,
  roomName,
}: checkIfRoomReservedOrRedirectArgs) => {
  "use server";

  const data = await fetch(
    `${DJANGO_URL}/api/reservations/check-room/${roomID}/`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  const room = await data.json();

  if (room.room) {
    const endTime = new Date(room!.end_time).getTime();
    const startTime = new Date(room!.start_time).getTime();

    redirect(`/timer/${room.id}/${roomName}/${startTime}/${endTime}`);
  }

  return room;
};
