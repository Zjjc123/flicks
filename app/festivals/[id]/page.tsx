"use client";

import { NavigationBar } from "@/components/NavigationBar";
import { useParams, useRouter } from "next/navigation";
import { festivals } from "../data";

export default function FestivalDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const festival = festivals.find((f) => f.id === id);

  if (!festival) {
    return (
      <main className="min-h-screen bg-neutral-950 p-4">
        <div className="text-white">Festival not found</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-950 pb-20">
      <div className="relative h-[40vh]">
        <img
          src={festival.imageUrl}
          alt={festival.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent" />

        {/* Back button */}
        <button
          onClick={() => router.back()}
          className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur-sm text-white p-2 rounded-sm hover:bg-black/70 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      </div>

      <div className="p-4 -mt-20 relative">
        <div className="text-sm text-neutral-400">
          {festival.date} | {festival.location}
        </div>
        <h1 className="text-2xl text-white font-medium mt-2">
          {festival.title}
        </h1>

        <div className="mt-6 space-y-4">
          <div className="bg-neutral-900/50 rounded-lg p-4">
            <h2 className="text-white font-medium mb-2">About</h2>
            <p className="text-neutral-400">
              {festival.description ||
                "Join us for an incredible celebration of cinema featuring premieres, independent films, documentaries, and short films. Experience the magic of storytelling through film, with both in-person and virtual screening options available."}
            </p>
          </div>

          <div className="bg-neutral-900/50 rounded-lg p-4">
            <h2 className="text-white font-medium mb-2">Status</h2>
            <span
              className={`
              px-3 py-1 rounded-full text-sm
              ${
                festival.status === "ongoing"
                  ? "bg-green-500/20 text-green-400"
                  : festival.status === "upcoming"
                  ? "bg-blue-500/20 text-blue-400"
                  : "bg-red-500/20 text-red-400"
              }
            `}
            >
              {festival.status.charAt(0).toUpperCase() +
                festival.status.slice(1)}
            </span>
          </div>
        </div>
      </div>

      <NavigationBar />
    </main>
  );
}
