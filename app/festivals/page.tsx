"use client";

import { NavigationBar } from "@/components/NavigationBar";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { festivals } from "./data";

type Tab = "MOST POPULAR" | "ONGOING" | "NEW FESTIVALS";

export default function FestivalsPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<Tab>("MOST POPULAR");

  const getFilteredFestivals = () => {
    const filtered = festivals.filter(
      (festival) =>
        festival.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        festival.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    switch (activeTab) {
      case "MOST POPULAR":
        return filtered.sort((a, b) => b.popularity - a.popularity);
      case "ONGOING":
        return filtered.filter((festival) => festival.status === "ongoing");
      case "NEW FESTIVALS":
        return filtered.filter((festival) => festival.status === "upcoming");
      default:
        return filtered;
    }
  };

  const filteredFestivals = getFilteredFestivals();

  const handleFestivalClick = (festivalId: string) => {
    router.push(`/festivals/${festivalId}`);
  };

  return (
    <main className="min-h-screen bg-neutral-950 pb-20">
      <div className="p-4 border-b border-neutral-800">
        <input
          type="search"
          placeholder="Search festivals..."
          className="w-full bg-neutral-900 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="flex items-center gap-4 p-4">
        <div className="flex justify-between w-full max-w-md text-sm">
          {(["MOST POPULAR", "ONGOING", "NEW FESTIVALS"] as const).map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="flex items-center gap-2 transition-colors"
              >
                <span
                  className={`text-red-500 ${activeTab !== tab && "opacity-0"}`}
                >
                  •
                </span>
                <span
                  className={`${
                    activeTab === tab ? "text-white" : "text-neutral-500"
                  }`}
                >
                  {tab}
                </span>
              </button>
            )
          )}
        </div>
      </div>

      <div className="p-4 space-y-4">
        {filteredFestivals.map((festival) => (
          <div
            key={festival.id}
            onClick={() => handleFestivalClick(festival.id)}
            className="flex items-center gap-4 bg-neutral-900/50 rounded-lg p-4 cursor-pointer hover:bg-neutral-900 transition-colors"
          >
            <img
              src={festival.imageUrl}
              alt={festival.title}
              className="w-24 h-32 object-cover rounded-lg"
            />
            <div className="flex-1">
              <div className="text-sm text-neutral-400">
                {festival.date} | {festival.location}
              </div>
              <h2 className="text-xl text-white font-medium mt-1">
                {festival.title}
              </h2>
            </div>
            <button className="text-3xl text-white">+</button>
          </div>
        ))}
      </div>

      <NavigationBar />
    </main>
  );
}
