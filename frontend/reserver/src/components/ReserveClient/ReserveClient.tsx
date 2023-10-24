"use client";

import useReserve from "@/hooks/useReserve";
import Spinner from "../Spinner";
import ReserveForm from "./ReserveForm";
import Container from "../Container";
import SignInUpContainer from "../SignInUpContainer";
import Title from "../Title";
import { formatRoomName } from "@/utils/formatRoomName";

interface ReserveClientProps {
  roomID: string;
  roomName: string;
  token: string;
}

export default function ReserveClient({
  roomID,
  roomName,
  token,
}: ReserveClientProps) {
  const { handleSelect, handleSubmit, loading } = useReserve({
    roomID,
    roomName,
    token,
  });

  if (loading) return <Spinner />;

  const name = formatRoomName(roomName);

  return (
    <Container style="lg:w-1/3 lg:h-2/5 mx-5 lg:m-0">
      <SignInUpContainer>
        <Title style="mb-4">{name}</Title>
        <div className="flex flex-col justify-center w-full">
          <p className="mx-auto mb-2 text-center">
            For how long do you want to reserve the room?
          </p>
          <ReserveForm
            handleSubmit={handleSubmit}
            handleSelect={handleSelect}
          />
        </div>
      </SignInUpContainer>
    </Container>
  );
}
