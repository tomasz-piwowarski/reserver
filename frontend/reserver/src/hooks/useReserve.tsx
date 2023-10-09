import { useState } from "react";
import { DJANGO_URL } from "@/utils/consts";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface UseReserveProps {
  id: string;
}

function addHours(date: Date, hours: number) {
  date.setTime(date.getTime() + hours * 60 * 60 * 1000);

  return date;
}

export default function useReserve({ id }: UseReserveProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const session = useSession();
  const token = session.data?.access;

  async function handleSubmit(formData: FormData): Promise<void> {
    setLoading(true);

    const hours = formData.get("hours") as string;

    const startTime = new Date();

    const endTime = addHours(new Date(startTime), parseInt(hours));

    const body = {
      room: id,
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

      console.log(data);
      router.push(`/timer/${id}/${startTime}/${endTime}`);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return { handleSubmit, loading };
}
