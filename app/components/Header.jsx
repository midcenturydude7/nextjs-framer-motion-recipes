import Link from "next/link";

export default function Header() {
  return (
    <div className="fixed inset-x-0 z-10 bg-gray-900 shadow-lg">
      <ul className="flex items-center justify-center gap-3 py-10 text-gray-300">
        <li className="pr-2">Recipes:</li>
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
