import { useState } from "react";
import { DJANGO_URL } from "@/utils/consts";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

interface UseReserveProps {
  roomID: string;
  roomName: string;
  token: string;
}

function addHours(date: Date, hours: number) {
  date.setTime(date.getTime() + hours * 60 * 60 * 1000);

  return date;
}

export default function useReserve({
  roomID,
  roomName,
  token,
}: UseReserveProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (formData: FormData): Promise<void> => {
    setLoading(true);

    const hours = formData.get("hours") as string;

    const startTime = new Date();

    const endTime = addHours(new Date(startTime), parseInt(hours));

    const body = {
      room: roomID,
      start_time: startTime,
      end_time: endTime,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await fetch(`${DJANGO_URL}/api/reservations/`, options);

      const data = await response.json();

      const startTime = new Date(data!.start_time).getTime();

      const endTime = new Date(data!.end_time).getTime();

      toast.success("Room has been reserved!");

      router.push(`/timer/${data.id}/${roomName}/${startTime}/${endTime}`);
    } catch (error: any) {
      if (error) {
        toast.error(error.message);
      } else {
        toast.error("An error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return { handleSubmit, loading };
}
