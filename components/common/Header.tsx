import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 text-black">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Coconut
        </Link>
        <div className="space-x-4 text-black">
          <Link href="/">
            Home
          </Link>
          <Link href="/about">
            About
          </Link>
          <Link href="/contact">
            Contact
          </Link>
        </div>
        <div className="space-x-4 text-white bg-gray-800 py-1.5 px-2 rounded">
          <Link href="/sign-in">
            Sign in
          </Link>
        </div>
      </nav>
    </header>
  );
}
