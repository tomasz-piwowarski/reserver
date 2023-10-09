import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
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
  const session = await getServerSession(options);

  if (!session || !session.user || !session.user.name)
    redirect("/api/auth/signin");

  const startTime = parseInt(params.startTime);

  const endTime = parseInt(params.endTime);

  return (
    <div>
      <Countdown startTime={startTime} endTime={endTime} />
    </div>
  );
}
