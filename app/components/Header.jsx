import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-gray-100 shadow-lg">
      <ul className="flex items-center justify-center gap-2 py-10">
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
        <Link href="/6-calendar">
          <li className="pl-4">6-calendar</li>
        </Link>
      </ul>
    </div>
  );
}
