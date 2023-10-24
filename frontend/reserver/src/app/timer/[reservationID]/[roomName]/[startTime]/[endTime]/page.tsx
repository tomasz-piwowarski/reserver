import Container from "@/components/Container";
import EndReservationEarlier from "@/components/Timer/EndReservationEarlier";
import Title from "@/components/Title";
import { formatRoomName } from "@/utils/formatRoomName";
import { getSessionOrRedirect } from "@/utils/session";
import dynamic from "next/dynamic";

const Countdown = dynamic(() => import("@/components/Timer/Timer"), {
  ssr: false,
});

interface TimerProps {
  params: {
    reservationID: string;
    startTime: string;
    endTime: string;
    roomName: string;
  };
}

export default async function Timer({ params }: TimerProps) {
  const session = await getSessionOrRedirect();

  const startTime = parseInt(params.startTime);

  const endTime = parseInt(params.endTime);

  const roomName = formatRoomName(params.roomName);
  console.log(session);
  return (
    <Container style="lg:w-1/3 lg:h-2/5 mx-5 lg:m-0">
      <div className="flex flex-col justify-center mx-auto lg:w-full md:w-1/2 w-full p-12 lg:p-24">
        <Title style="mb-4 text-gray-900 text-2xl mx-auto">{roomName}</Title>
        <Countdown
          startTime={startTime}
          endTime={endTime}
          reservationID={params.reservationID}
          token={session.access}
        />
        {!session.user.room ? (
          <EndReservationEarlier
            reservationID={params.reservationID}
            access={session.access}
          />
        ) : null}
      </div>
    </Container>
  );
}
