import { DJANGO_URL } from "@/utils/consts";
import { getUTCTimestamp } from "@/utils/date";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

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
        const currentTime = getUTCTimestamp();

        if (currentTime > endTime) router.push("/reserver");

        const response = await fetch(
          `${DJANGO_URL}/api/reservations/check-reservation/${reservationID}/`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        const data = await response.json();

        if (data.ended) {
          router.push(`/reserver`);
        }
      } catch (error: any) {
        console.log(error);
        if (error) {
          toast.error(error.message);
        } else {
          toast.error("An error occurred");
        }
      }
    }

    const intervalId = setInterval(checkIfNotReserved, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
}
