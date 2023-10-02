import type { DefaultSession, DefaultUser } from "next-auth";
import type { DefaultJWT } from "next-auth/jwt";

interface Token {
  user: {
    access: string;
    refresh: string;
  };
}

interface Room {
  id: number;
  room_name: string;
  user: number;
}

// nextauth.d.ts
declare module "next-auth" {
  interface User extends DefaultUser {
    token_type: string;
    exp: number;
    iat: number;
    jti: string;
    user_id: number;
    room?: Room;
  }

  interface Session extends DefaultSession {
    user?: User;
    access: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    user: AdapterUser;
  }
}
