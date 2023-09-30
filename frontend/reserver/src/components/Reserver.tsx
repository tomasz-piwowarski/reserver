import { getServerSession } from "next-auth/next";
import type { NextRequest } from "next/server";
import { options } from "../app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export default async function ReserverBody(req: NextRequest) {
  const session = await getServerSession(options);

  if (!session) redirect("/api/auth/signin");

  const user = session.user!.name;

  return (
    <div className="grid grid-cols-2 p-4">
      <div>
        {session !== null ? (
          <h1 className="leading-loose text-[15rem] font-extrabold text-accent">
            Hi {user}
          </h1>
        ) : (
          <a className="btn btn-primary" href="/api/auth/signin">
            Sign in
          </a>
        )}
      </div>
    </div>
  );
  return <>XD</>;
}
