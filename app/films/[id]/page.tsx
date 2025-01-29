"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { films } from "@/app/data/films";
import { cn } from "@/lib/utils";

type Tab = "DETAILS" | "CREDITS" | "AWARDS";

export default function FilmDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>("DETAILS");
  const film = films.find((m) => m.id === Number(id));

  if (!film) {
    return (
      <main className="min-h-screen bg-neutral-950 p-4">
        <div className="text-white">film not found</div>
      </main>
    );
  }

  const tabs: Tab[] = ["DETAILS", "CREDITS", "AWARDS"];

  return (
    <main className="min-h-screen bg-neutral-950 pb-20">
      <div className="relative h-[60vh]">
        <img
          src={film.imageUrl}
          alt={film.title}
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
        <h1 className="text-2xl text-white font-medium mt-2">{film.title}</h1>

        <div className="mt-4 flex flex-wrap gap-2">
          {film.genres.map((genre) => (
            <span
              key={genre}
              className="px-3 py-1 bg-white/10 rounded-full text-sm text-white"
            >
              {genre}
            </span>
          ))}
        </div>

        {/* Tabs */}
        <div className="mt-8 border-b border-white/10">
          <div className="flex gap-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "pb-4 text-sm font-medium relative",
                  activeTab === tab
                    ? "text-white"
                    : "text-white/60 hover:text-white/80"
                )}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === "DETAILS" && (
            <div className="space-y-4">
              <div className="bg-neutral-900/50 rounded-lg p-4">
                <h2 className="text-white font-medium mb-2">About</h2>
                <p className="text-neutral-400">{film.details.description}</p>
              </div>
              <div className="bg-neutral-900/50 rounded-lg p-4">
                <h2 className="text-white font-medium mb-2">Details</h2>
                <div className="text-neutral-400">
                  <p>Duration: {film.details.duration}</p>
                  <p>Release Year: {film.details.releaseYear}</p>
                  <p>Country: {film.details.country}</p>
                  <p>Language: {film.details.language}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "CREDITS" && (
            <div className="bg-neutral-900/50 rounded-lg p-4">
              <div className="space-y-3">
                {Object.entries(film.credits).map(([role, name]) => (
                  <div key={role} className="flex justify-between items-center">
                    <span className="text-neutral-400">{role}</span>
                    <span className="text-white">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "AWARDS" && (
            <div className="space-y-4">
              {film.awards.map((award, index) => (
                <div key={index} className="bg-neutral-900/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-white">{award.year}</span>
                    <span className="text-white/60">•</span>
                    <span className="text-white">{award.festival}</span>
                  </div>
                  <p className="text-neutral-400">{award.award}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
