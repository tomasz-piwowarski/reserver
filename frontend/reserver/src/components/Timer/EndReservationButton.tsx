"use client";

import { DJANGO_URL } from "@/utils/consts";
import Button from "../Button";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

interface EndReservationButtonProps {
  reservationID: string;
  access: string;
}

export default function EndReservationButton({
  reservationID,
  access,
}: EndReservationButtonProps) {
  const router = useRouter();

  const endReservationEarlier = async () => {
    try {
      const response = await fetch(
        `${DJANGO_URL}/api/reservations/${reservationID}/`,
        {
          headers: {
            Authorization: `Bearer ${access}`,
            "Content-Type": "application/json",
          },
          method: "PATCH",
          body: JSON.stringify({
            ended_earlier: true,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) throw new Error(data.message);

      toast.success("Reservation has been ended earlier");
    } catch (error: any) {
      if (error) {
        toast.error(error.message);
      } else {
        toast.error("An error occurred");
      }
    } finally {
      router.push("/reserver");
    }
  };

  return (
    <Button style="mt-4" onClick={endReservationEarlier}>
      End reservation
    </Button>
  );
}
