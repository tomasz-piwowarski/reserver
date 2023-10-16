"use client";

import Countdown from "react-countdown";
import useTimer from "@/hooks/useTimer";

interface CountdownProps {
  startTime: number;
  endTime: number;
}

interface RendererProps {
  total: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const renderer = ({ total, hours, minutes, seconds }: RendererProps) => {
  if (total) {
    // Render a countdown
    return (
      <span className="text-3xl">
        {hours}:{minutes}:{seconds}
      </span>
    );
  } else {
    // Render a finished state
    return <div>Finished!</div>;
  }
};

export default function Timer({ startTime, endTime }: CountdownProps) {
  const value = useTimer({ startTime, endTime });

  return (
    <div className="mx-auto">
      <Countdown date={value} renderer={renderer} />
    </div>
  );
}
