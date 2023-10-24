"use client";

import Countdown from "react-countdown";
import useTimer from "@/hooks/useTimer";
import { twoDigitsNumber } from "@/utils/twoDigitsNumber";

interface CountdownProps {
  startTime: number;
  endTime: number;
  reservationID: string;
  token: string;
}

interface RendererProps {
  total: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const renderer = ({ total, hours, minutes, seconds }: RendererProps) => {
  if (total) {
    return (
      <span className="text-3xl">
        {twoDigitsNumber(hours)}:{twoDigitsNumber(minutes)}:
        {twoDigitsNumber(seconds)}
      </span>
    );
  } else {
    return <div>Finished!</div>;
  }
};

export default function Timer({
  startTime,
  endTime,
  reservationID,
  token,
}: CountdownProps) {
  useTimer({ startTime, endTime, reservationID, token });

  return (
    <div className="mx-auto">
      <Countdown date={endTime} renderer={renderer} />
    </div>
  );
}
