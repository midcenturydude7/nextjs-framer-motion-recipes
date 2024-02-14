import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <ul className="flex">
        <Link href="/1-step">
          <li>1-steps</li>
        </Link>
        <Link href="/2-email">
          <li className="pl-4">2-email</li>
        </Link>
        <Link href="/3-header">
          <li className="pl-4">3-header</li>
        </Link>
        <Link href="/4-carousel">
          <li className="pl-4">4-carousel</li>
        </Link>
        <Link href="/5-panel">
          <li className="pl-4">5-panel</li>
        </Link>
      </ul>
    </div>
  );
}
