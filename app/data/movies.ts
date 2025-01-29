export interface Movie {
  id: number;
  title: string;
  rating: number;
  genres: string[];
  imageUrl: string;
}

export const filterOptions = {
  GENRE: [
    "Action",
    "Animation",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Experimental",
    "Fantasy",
    "Film Noir",
    "Historical",
    "Horror",
    "Musical",
    "Mystery",
    "Political",
    "Psychological",
    "Romance",
    "Sci-Fi",
    "Science",
    "Sports",
    "Thriller",
  ],
  DURATION: ["0-30 min", "30-60 min", "60-90 min", "90+ min"],
  LANGUAGE: ["English", "French", "Japanese", "German", "Spanish", "Italian"],
};

export const movies: Movie[] = [
  {
    id: 1,
    title: "Rabbit",
    rating: 9.3,
    genres: ["Drama", "Experimental"],
    imageUrl: "/films/rabbit.png",
  },
  {
    id: 2,
    title: "I Left My Home",
    rating: 8.1,
    genres: ["Sci-Fi", "Experimental"],
    imageUrl: "/films/i-left-my-home.png",
  },
  {
    id: 3,
    title: "Kairos",
    rating: 7.4,
    genres: ["Experimental", "Sci-Fi"],
    imageUrl: "/films/kairos.png",
  },
  {
    id: 4,
    title: "Metasis",
    rating: 8.5,
    genres: ["Sci-Fi", "Drama"],
    imageUrl: "/films/metasis.png",
  },
  {
    id: 5,
    title: "The Sweetness Of Lapse",
    rating: 7.1,
    genres: ["Sci-Fi", "Experimental"],
    imageUrl: "/films/the-sweetness-of-lapse.png",
  },
  {
    id: 6,
    title: "Together Alone",
    rating: 7.1,
    genres: ["Sci-Fi", "Experimental"],
    imageUrl: "/films/together-alone.png",
  },
  {
    id: 7,
    title: "Wild Will",
    rating: 8.2,
    genres: ["Experimental", "Sci-Fi"],
    imageUrl: "/films/wild-will.png",
  },
]; 