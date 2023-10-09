import dynamic from "next/dynamic";

const Countdown = dynamic(() => import("@/components/Timer"), { ssr: false });

interface TimerProps {
  params: {
    room_id: string;
    startTime: string;
    endTime: string;
  };
}

export default async function Timer({ params }: TimerProps) {
  const startTime = parseInt(params.startTime);

  const endTime = parseInt(params.endTime);

  return (
    <div>
      <Countdown startTime={startTime} endTime={endTime} />
    </div>
  );
}
