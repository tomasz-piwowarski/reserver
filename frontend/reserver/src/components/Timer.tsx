"use client";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import useTimer from "@/hooks/useTimer";

interface CountdownProps {
  startTime: number;
  endTime: number;
}

export default function Countdown({ startTime, endTime }: CountdownProps) {
  const percentage = useTimer({ startTime, endTime });

  return (
    <div>
      <CircularProgressbar value={percentage} text={`${percentage}%`} />;
    </div>
  );
}
