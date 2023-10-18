"use client";

import { useEffect } from "react";
import QR from "./QR";
import { DJANGO_URL } from "@/utils/consts";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

interface QRContainerProps {
  value: string;
  roomID: number;
  roomName: string;
  access: string;
}

export default function QRContainer({
  value,
  roomID,
  roomName,
  access,
}: QRContainerProps) {
  const router = useRouter();

  useEffect(() => {
    async function checkIfReserved() {
      try {
        const response = await fetch(
          `${DJANGO_URL}/api/reservations/check-room/${roomID}/`,
          { headers: { Authorization: `Bearer ${access}` } }
        );
        const data = await response.json();

        if (data.end_time && data.start_time) {
          const endTime = new Date(data.end_time).getTime();
          const startTime = new Date(data.start_time).getTime();

          toast.success("Room has been reserved!");

          router.push(`/timer/${roomID}/${roomName}/${startTime}/${endTime}`);
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

    const intervalID = setInterval(checkIfReserved, 5000);

    return () => {
      clearInterval(intervalID);
    };
  }, [value]);

  return <QR value={value} />;
}
