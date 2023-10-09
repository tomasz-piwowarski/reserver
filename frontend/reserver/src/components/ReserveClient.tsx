"use client";

import useReserve from "@/hooks/useReserve";
import Spinner from "./Spinner";
import ReserveForm from "./ReserveForm";

interface ReserveClientProps {
  id: string;
}

export default function ReserveClient({ id }: ReserveClientProps) {
  const { handleSubmit, loading } = useReserve({ id });

  if (loading) return <Spinner />;

  return (
    <>
      <ReserveForm handleSubmit={handleSubmit} />
    </>
  );
}
