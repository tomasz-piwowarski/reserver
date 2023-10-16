import ReserveClient from "@/components/ReserveClient/ReserveClient";
import ReserveClientProvider from "@/components/ReserveClient/ReserveClientProvider";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { DJANGO_URL } from "@/utils/consts";

interface ReserveProps {
  params: {
    roomName: string;
    roomUserID: string;
    roomID: string;
  };
}

export default async function Reserve({ params }: ReserveProps) {
  const session = await getServerSession(options);

  if (!session || !session.user || !session.user.name) redirect("/signin");

  const data = await fetch(
    `${DJANGO_URL}/api/reservations/check-room/${params.roomID}/`,
    {
      headers: { Authorization: `Bearer ${session.access}` },
    }
  );

  const isRoom = await data.json();

  if (isRoom.room) {
    const endTime = new Date(isRoom!.end_time).getTime();
    const startTime = new Date(isRoom!.start_time).getTime();

    redirect(
      `/timer/${params.roomID}/${params.roomName}/${startTime}/${endTime}`
    );
  }

  return (
    <>
      <ReserveClientProvider session={session}>
        <ReserveClient roomID={params.roomID} roomName={params.roomName} />
      </ReserveClientProvider>
    </>
  );
}
