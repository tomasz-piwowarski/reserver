import User from "@/components/User/User";
import Room from "@/components/Room/Room";
import { getSessionOrRedirect } from "@/utils/session";

export default async function Reserver() {
  const session = await getSessionOrRedirect();

  return (
    <>
      {session.user.room ? (
        <Room
          userID={session.user.user_id}
          roomID={session.user.room.id}
          roomName={session.user.room.room_name}
        />
      ) : (
        <User />
      )}
    </>
  );
}
