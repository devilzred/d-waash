import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <p className="font-display font-extrabold text-8xl gradient-text mb-4">404</p>
      <h1 className="font-display font-bold text-2xl text-white mb-3">Page Not Found</h1>
      <p className="text-slate-400 mb-8 max-w-sm">
        Looks like this page doesn't exist. Let's get you back to clean territory.
      </p>
      <Link href="/" className="btn-cyan px-8 py-3 rounded-xl text-sm">
        Back to Home
      </Link>
    </section>
  );
}