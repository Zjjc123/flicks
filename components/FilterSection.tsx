"use client";

import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useState } from "react";
import { cn } from '@/lib/utils';


export function FilterSection() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const addFilter = (filter: string) => {
    if (!selectedFilters.includes(filter)) {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  const removeFilter = (filter: string) => {
    setSelectedFilters(selectedFilters.filter((f) => f !== filter));
  };

  return (
    <section className="px-6">
        <div className="px-6 py-8 text-white">
          <h3 className="text-xl mb-4">Filter by</h3>

          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="text-white hover:text-white">
              COUNTRY <span className="ml-1">+</span>
            </Button>
            <Button variant="outline" className="text-white hover:text-white">
              DURATION <span className="ml-1">+</span>
            </Button>
            <Button variant="outline" className="text-white hover:text-white">
              LANGUAGE <span className="ml-1">+</span>
            </Button>
            <Button variant="outline" className="text-white hover:text-white">
              GENRE <span className="ml-1">+</span>
            </Button>
            <Button variant="outline" className="text-white hover:text-white">
              AGE <span className="ml-1">+</span>
            </Button>
            <Button variant="outline" className="text-white hover:text-white">
              TECHNIQUE <span className="ml-1">+</span>
            </Button>

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
