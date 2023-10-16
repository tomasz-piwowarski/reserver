import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface UseTimerProps {
  startTime: number;
  endTime: number;
}

export default function useTimer({ startTime, endTime }: UseTimerProps) {
  const [currentTime, setCurrentTime] = useState(new Date().getTime());
  const router = useRouter();

  if (currentTime > endTime) router.push("/reserver");

  useEffect(() => {
    const intervalId = setInterval(
      () => setCurrentTime(new Date().getTime()),
      1000
    );

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return endTime;
}
