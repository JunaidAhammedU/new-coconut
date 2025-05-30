import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 text-black sticky top-0 backdrop-blur-md bg-white/80 border-b border-gray-200/20 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tight hover:text-gray-700 transition-colors">
          Coconut
        </Link>
        <div className="space-x-6 text-black text-sm">
          <Link href="/" className="hover:text-gray-600 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-600 transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-600 transition-colors">
            Contact
          </Link>
        </div>
        <div>
          <Link href="/sign-in" className="text-white bg-gray-800 py-2 px-6 rounded-lg text-sm hover:bg-gray-700 transition-all duration-200 hover:shadow-lg">
            Sign in
          </Link>
        </div>
      </nav>
    </header>
  );
}
