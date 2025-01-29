"use client";

import { Featured } from "@/components/Featured";
import { NavigationBar } from "@/components/NavigationBar";
import { FilterSection } from "@/components/FilterSection";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Explore } from "@/components/Explore";

type Tab = "EXPLORE" | "FILTERS";

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("EXPLORE");

  return (
    <main className="min-h-screen bg-neutral-950 pb-20">
      <Featured
        title="RABBIT"
        rating={9.3}
        genres={["DRAMA", "EXPERIMENTAL"]}
        description="On an afternoon in the countryside, we follow Anna's childhood memory of her Grandfather and learn about a complex relationship as events unfold."
        image="/films/rabbit.png"
        awards={["Best First-Time Female Director"]}
      />

      <div className="flex w-full justify-center gap-8 mb-4 pt-4">
        <button
          onClick={() => setActiveTab("EXPLORE")}
          className={cn(
            "flex items-center gap-2 transition-colors",
            activeTab === "EXPLORE" && "text-white",
            activeTab !== "EXPLORE" && "text-neutral-500"
          )}
        >
          <span
            className={cn(
              "text-red-500",
              activeTab !== "EXPLORE" && "opacity-0"
            )}
          >
            •
          </span>
          <span>EXPLORE</span>
        </button>

        <button
          onClick={() => setActiveTab("FILTERS")}
          className={cn(
            "flex items-center gap-2 transition-colors",
            activeTab === "FILTERS" && "text-white",
            activeTab !== "FILTERS" && "text-neutral-500"
          )}
        >
          <span
            className={cn(
              "text-red-500",
              activeTab !== "FILTERS" && "opacity-0"
            )}
          >
            •
          </span>
          <span>FILTERS</span>
        </button>
      </div>

      {activeTab === "EXPLORE" && (
        <div>
          <Explore />
        </div>
      )}

      {activeTab === "FILTERS" && (
        <div>
          <FilterSection />
        </div>
      )}

      <NavigationBar />
    </main>
  );
}
