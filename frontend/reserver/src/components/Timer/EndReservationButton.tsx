"use client";

import { DJANGO_URL } from "@/utils/consts";
import Button from "../Button";
import { useRouter } from "next/navigation";

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
            active: false,
          }),
        }
      );

      const data = await response.json();

      router.push("/reserver");
    } catch (error) {
      console.log(error);
    }
  };

  return <Button onClick={endReservationEarlier}>End reservation</Button>;
}
