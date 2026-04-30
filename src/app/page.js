import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <h1>Home</h1>
      <Link href="/about">About</Link>

    </div>
  );
}
