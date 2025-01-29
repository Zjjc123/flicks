"use client";

import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useState } from "react";

// Define filter options
const filterOptions = {
  COUNTRY: ["USA", "France", "Japan", "Germany", "UK", "Italy", "Spain"],
  DURATION: ["0-30 min", "30-60 min", "60-90 min", "90+ min"],
  LANGUAGE: ["English", "French", "Japanese", "German", "Spanish", "Italian"],
  GENRE: ["Animation", "Documentary", "Drama", "Comedy", "Horror", "Sci-Fi"],
  AGE: ["All Ages", "7+", "13+", "16+", "18+"],
  TECHNIQUE: ["2D Animation", "3D Animation", "Stop Motion", "Mixed Media", "Live Action"]
};

export function FilterSection() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const addFilter = (filter: string) => {
    if (!selectedFilters.includes(filter)) {
      setSelectedFilters([...selectedFilters, filter]);
    }
    setOpenDropdown(null);
  };

  const removeFilter = (filter: string) => {
    setSelectedFilters(selectedFilters.filter((f) => f !== filter));
  };

  return (
    <section className="px-6">
      <div className="px-6 py-8 text-white">
        <h3 className="text-xl mb-4">Filter by</h3>

        <div className="flex flex-wrap gap-3">
          {Object.entries(filterOptions).map(([category, options]) => (
            <div key={category} className="relative">
              <Button
                variant="secondary"
                size="xs"
                className="bg-white text-black hover:bg-white/90"
                onClick={() => setOpenDropdown(openDropdown === category ? null : category)}
              >
                {category} <span className="ml-1">{openDropdown === category ? '−' : '+'}</span>
              </Button>
              
              {openDropdown === category && (
                <div className="absolute z-50 mt-1 w-48 bg-white rounded-md shadow-lg">
                  <div className="py-1">
                    {options.map((option) => (
                      <button
                        key={option}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => addFilter(`${category}: ${option}`)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search filter..."
              className="bg-transparent border border-white/20 rounded-md pl-10 pr-4 py-2 text-white placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-white/30"
            />
          </div>

          {selectedFilters.map((filter) => (
            <Button
              key={filter}
              variant="destructive"
              size="sm"
              className="gap-2"
              onClick={() => removeFilter(filter)}
            >
              {filter}
              <span>×</span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
