import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-violet-400/90 text-gray-700 py-4 rounded-b-xl shadow-md">
      <div id="header-title" className="text-2xl font-bold">Tucker Little</div>
      <nav className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <ul className="flex gap-6">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}