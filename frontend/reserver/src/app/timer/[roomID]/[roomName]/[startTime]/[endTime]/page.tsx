import Container from "@/components/Container";
import Title from "@/components/Title";
import dynamic from "next/dynamic";

const Countdown = dynamic(() => import("@/components/Timer/Timer"), {
  ssr: false,
});

interface TimerProps {
  params: {
    room_id: string;
    startTime: string;
    endTime: string;
    roomName: string;
  };
}

export default async function Timer({ params }: TimerProps) {
  const startTime = parseInt(params.startTime);

  const endTime = parseInt(params.endTime);

  const roomName = params.roomName.replace(/%20/g, " ");

  return (
    <Container style="lg:w-1/3 lg:h-2/5 mx-5 lg:m-0">
      <div className="flex flex-col justify-center mx-auto lg:w-full md:w-1/2 w-full p-12 lg:p-24">
        <Title style="mb-4 text-gray-900 text-2xl mx-auto">{roomName}</Title>
        <Countdown startTime={startTime} endTime={endTime} />
      </div>
    </Container>
  );
}
