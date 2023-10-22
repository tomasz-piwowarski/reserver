import { redirect } from "next/navigation";
import { DJANGO_URL } from "@/utils/consts";
import { getSessionOrRedirect } from "@/utils/session";

export default async function User() {
  const session = await getSessionOrRedirect();

  const response = await fetch(`${DJANGO_URL}/api/reservations/check-user/`, {
    headers: { Authorization: `Bearer ${session.access}` },
  });

  const data = await response.json();

  if (data.room) {
    const endTime = new Date(data!.end_time).getTime();
    const startTime = new Date(data!.start_time).getTime();

    redirect(
      `/timer/${data.id}/${data.room.room_name}/${startTime}/${endTime}`
    );
  }

  const user = session.user!.name;

  return <div>Hi {user}! Scan QR code to get to reserving room!</div>;
}
