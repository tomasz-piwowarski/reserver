"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface CountdownProps {
  startTime: number;
  endTime: number;
}

export default function Countdown({ startTime, endTime }: CountdownProps) {
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

  const value = (currentTime - startTime) / (endTime - startTime);

  const percentage = parseFloat(value.toFixed(2));
  return (
    <div>
      <CircularProgressbar value={percentage} text={`${percentage}%`} />;
    </div>
  );
}
