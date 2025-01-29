"use client";

import { Button } from "./ui/button";
import { X } from "lucide-react";
import { useState } from "react";
import { FilmCard } from "./FilmCard";
import { films, filterOptions } from "@/app/data/films";

export function FilterSection() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>("default");

  const addFilter = (filter: string) => {
    if (!selectedFilters.includes(filter)) {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  const removeFilter = (filter: string) => {
    setSelectedFilters(selectedFilters.filter((f) => f !== filter));
  };

  // Filter films based on selected filters
  const filteredFilms = films.filter((film) => {
    if (selectedFilters.length === 0) return true;

    return selectedFilters.some((filter) => {
      const [category, value] = filter.split(": ");
      if (category === "GENRE") {
        return film.genres.includes(value);
      }
      // Add more filter logic for DURATION and LANGUAGE
      return false;
    });
  });

  // Sort films after filtering
  const sortedFilms = [...filteredFilms].sort((a, b) => {
    switch (sortBy) {
      case "rating-high":
        return b.rating - a.rating;
      case "rating-low":
        return a.rating - b.rating;
      case "title-asc":
        return a.title.localeCompare(b.title);
      case "title-desc":
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });

  return (
    <div>
      <section className="px-6">
        <div className="px-6 py-8 text-white">
          <h3 className="text-xl mb-4">Filter by</h3>

          <div className="flex flex-wrap gap-6">
            {Object.entries(filterOptions).map(([category]) => (
              <Button
                key={category}
                variant="secondary"
                size="xs"
                className="bg-white text-black hover:bg-white/90"
                onClick={() => setActiveModal(category)}
              >
                {category}
              </Button>
            ))}

            <div className="flex-1">
              {selectedFilters.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
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
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="px-12 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl text-white">
            Results{" "}
            <span className="text-white/60">{filteredFilms.length} Films</span>
          </h2>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white/10 text-white border border-white/20 rounded-md px-3 py-1.5 text-sm"
          >
            <option value="default">Sort by</option>
            <option value="rating-high">Rating (High to Low)</option>
            <option value="rating-low">Rating (Low to High)</option>
            <option value="title-asc">Title (A-Z)</option>
            <option value="title-desc">Title (Z-A)</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {sortedFilms.map((film) => (
            <FilmCard
              key={film.id}
              id={film.id}
              title={film.title}
              rating={film.rating}
              genres={film.genres}
              imageUrl={film.imageUrl}
            />
          ))}
        </div>
      </section>

      {/* Modal */}
      {activeModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-black border border-white/20 rounded-lg p-6 max-w-2xl w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl text-white">
                Choose your {activeModal.toLowerCase()}
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setActiveModal(null)}
                className="text-white hover:text-white/80"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            <p className="text-white/60 text-sm mb-4">
              1-3 filters is recommended for better results
            </p>

            <div className="flex flex-wrap gap-2">
              {filterOptions[activeModal as keyof typeof filterOptions].map(
                (option) => (
                  <button
                    key={option}
                    onClick={() => {
                      addFilter(`${activeModal}: ${option}`);
                      setActiveModal(null);
                    }}
                    className={`px-4 py-2 rounded-md text-sm transition-colors
                    ${
                      selectedFilters.includes(`${activeModal}: ${option}`)
                        ? "bg-white text-black"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {option}
                  </button>
                )
              )}
            </div>

            <div className="mt-6 flex justify-end">
              <Button
                variant="secondary"
                className="bg-white text-black hover:bg-white/90"
                onClick={() => setActiveModal(null)}
              >
                Done
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
