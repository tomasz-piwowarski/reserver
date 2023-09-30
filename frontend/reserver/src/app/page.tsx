import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <Link href="/signup">Sign Up!</Link>
      </div>
      <div>
        <Link href="/api/auth/signin">Sign In!</Link>
      </div>
    </main>
  );
}
