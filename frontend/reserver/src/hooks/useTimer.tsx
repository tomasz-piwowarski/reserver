import { DJANGO_URL } from "@/utils/consts";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

interface UseTimerProps {
  startTime: number;
  endTime: number;
  reservationID: string;
  token: string;
}

export default function useTimer({
  startTime,
  endTime,
  reservationID,
  token,
}: UseTimerProps) {
  const router = useRouter();

  useEffect(() => {
    async function checkIfNotReserved() {
      try {
        const currentTime = new Date().getTime();

        if (currentTime > endTime) router.push("/reserver");

        const response = await fetch(
          `${DJANGO_URL}/api/reservations/check-reservation/${reservationID}/`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        const data = await response.json();

        if (!data.active) {
          router.push(`/reserver`);
        }
      } catch (error) {
        console.log(error);
      }
    }

    const intervalId = setInterval(checkIfNotReserved, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
}
