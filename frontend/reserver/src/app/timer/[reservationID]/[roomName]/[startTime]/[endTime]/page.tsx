import { options } from "@/app/api/auth/[...nextauth]/options";
import Container from "@/components/Container";
import EndReservationButton from "@/components/Timer/EndReservationButton";
import Title from "@/components/Title";
import { getServerSession } from "next-auth";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

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
  const session = await getServerSession(options);

  if (!session || !session.user) redirect("/signin");

  const startTime = parseInt(params.startTime);

  const endTime = parseInt(params.endTime);

  const roomName = params.roomName.replace(/%20/g, " ");

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
          <EndReservationButton
            reservationID={params.reservationID}
            access={session.access}
          />
        ) : null}
      </div>
    </Container>
  );
}
