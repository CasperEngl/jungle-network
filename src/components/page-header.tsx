/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/9NmNzxICw7d
 */
import Link from "next/link";
import { Button } from "~/components/ui/button";

export function PageHeader() {
  return (
    <header
      key="1"
      className="sticky top-0 flex items-center justify-between px-6 h-14 bg-gradient-to-bl from-green-700 to-green-900 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="flex items-center space-x-4 md:space-x-2">
        <Link href="/">
          <h1 className="text-xl font-bold text-white">Jungle</h1>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-4 text-sm">
            <li>
              <Link href="/jobs" className="text-white hover:text-gray-300">
                Find jobs
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-gray-300">
                Browse brands
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="text-white hover:text-gray-300"
              >
                My jobs
              </Link>
            </li>
          </ul>
        </nav>
        <Button
          className="text-sm border border-white text-white bg-transparent"
          variant="ghost"
        >
          Sign In
        </Button>
        <Button className="text-sm bg-white text-black">Sign Up</Button>
      </div>
    </header>
  );
}
