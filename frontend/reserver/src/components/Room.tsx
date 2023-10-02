import QR from "./QR";

interface RoomProps {
  user: number;
  room: number;
}

export default function Room({ user, room }: RoomProps) {
  return (
    <div
      style={{ height: "auto", margin: "0 auto", maxWidth: 256, width: "100%" }}
    >
      <QR value={`http://localhost:3000/reserve/${user}/${room}`} />
    </div>
  );
}
