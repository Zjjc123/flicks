import { FilmCard } from "./FilmCard";
import { films } from "@/app/data/films";

export function Explore() {
  // Get first 5 films for featured section
  const featuredFilms = films.slice(0, 5);

  return (
    <main className="min-h-screen bg-black">
      <div className="max-w-[2000px] mx-auto">
        <div className="pt-8 pb-4 px-12">
          <h1 className="text-2xl font-bold text-white">Best of the week</h1>
        </div>

        <section className="px-12 py-8">
          {featuredFilms.map((film) => (
            <div className="pb-10" key={film.id}>
              <FilmCard
                id={film.id}
                title={film.title}
                rating={film.rating}
                genres={film.genres}
                imageUrl={film.imageUrl}
              />
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
