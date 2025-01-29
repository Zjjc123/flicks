import Link from "next/link";
import { FaFilm, FaCalendar } from "react-icons/fa";

export function NavigationBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-around py-4">
          <Link
            href="/"
            className="flex flex-col items-center text-neutral-400 hover:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <FaFilm className="w-6 h-6" />
            </svg>
            <span className="text-xs mt-1">FILMS</span>
          </Link>

          <Link
            href="/festivals"
            className="flex flex-col items-center text-neutral-400 hover:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <FaCalendar className="w-6 h-6" />
            </svg>
            <span className="text-xs mt-1">FESTIVALS</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
