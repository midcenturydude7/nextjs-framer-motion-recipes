import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <ul className="flex">
        <Link href="/1-step">
          <li>1-steps</li>
        </Link>
        <li className="pl-4">2-email</li>
        <li className="pl-4">3-header-part-1</li>
      </ul>
    </div>
  );
}
