import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-brand-black text-white px-4">
      <h1 className="font-display text-4xl font-extrabold mb-4">404</h1>
      <p className="text-gray-400 mb-8">Page not found</p>
      <Link
        href="/"
        className="btn-brand px-8 py-4 rounded-full font-bold"
      >
        Return Home
      </Link>
    </div>
  );
}
