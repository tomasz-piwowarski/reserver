import { options } from "@/app/api/auth/[...nextauth]/options";
import ReserveClient from "@/components/ReserveClient";
import ReserveClientProvider from "@/components/ReserveClientProvider";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Reserve({
  params,
}: {
  params: { room_user_id: string; room_id: string };
}) {
  const session = await getServerSession(options);

  if (!session || !session.user || !session.user.name)
    redirect("/api/auth/signin");

  return (
    <>
      <ReserveClientProvider session={session}>
        <ReserveClient id={params.room_id} />
      </ReserveClientProvider>
    </>
  );
}
