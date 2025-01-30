export interface Film {
  id: string;
  title: string;
  rating: number;
  genres: string[];
  imageUrl: string;
  details: {
    duration: string;
    releaseYear: number;
    country: string;
    language: string;
    description: string;
  };
  credits: {
    [role: string]: string;
  };
  awards: {
    year: string;
    festival: string;
    award: string;
  }[];
  videoUrl: string;
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

export const films: Film[] = [
  {
    id: "rabbit",
    title: "Rabbit",
    rating: 9.3,
    genres: ["Drama", "Experimental"],
    imageUrl: "/films/rabbit.png",
    details: {
      duration: "7:36",
      releaseYear: 2023,
      country: "United States",
      language: "English",
      description:
        "While exploring an unknown place, an astronaut is confronted with fragmented memories that gradually unfold, forcing them to face their fears and embrace a journey where reality and illusion intertwine.",
    },
    credits: {
      Director: "Sarah Chen",
      Writer: "Sarah Chen",
      Producer: "Michael Roberts",
      Editor: "James Wilson",
      "Music Composer": "Elena Rodriguez",
      "Sound Mixer": "David Kim",
      Cinematographer: "Chris Taylor",
      "Lead Actor": "Marcus Lee",
      "Supporting Actor": "Anna Park",
      "Sound Designer": "Robert Brown",
      "Special Effects": "VFX Studios",
    },
    awards: [
      {
        year: "2023",
        festival: "New York Shorts International Film Festival",
        award: "Official Selection",
      },
      {
        year: "2023",
        festival: "IndieX Film Fest",
        award: "Outstanding Achievement Award (Drama)",
      },
      {
        year: "2023",
        festival: "Los Angeles Lift-Off Film Festival",
        award: "Best Experimental Short",
      },
    ],
    videoUrl: "https://www.youtube.com/watch?v=RTTvB4UaEZA",
  },
  {
    id: "i-left-my-home",
    title: "I Left My Home",
    rating: 8.1,
    genres: ["Sci-Fi", "Experimental"],
    imageUrl: "/films/i-left-my-home.png",
    details: {
      duration: "12:45",
      releaseYear: 2023,
      country: "Canada",
      language: "English",
      description:
        "A poetic exploration of displacement and belonging, following a lone traveler through surreal landscapes as they search for the meaning of home in an increasingly disconnected world.",
    },
    credits: {
      Director: "Michael Zhang",
      Writer: "Michael Zhang",
      Producer: "Emily Watson",
      Editor: "David Chen",
      "Music Composer": "Sarah Miller",
      Cinematographer: "James Lee",
    },
    awards: [
      {
        year: "2023",
        festival: "Toronto Short Film Festival",
        award: "Best Sci-Fi Short",
      },
    ],
  },
  {
    id: "kairos",
    title: "Kairos",
    rating: 7.4,
    genres: ["Experimental", "Sci-Fi"],
    imageUrl: "/films/kairos.png",
    details: {
      duration: "15:20",
      releaseYear: 2023,
      country: "United States",
      language: "English",
      description:
        "A mind-bending journey through time as a physicist discovers the ability to manipulate moments, leading to unforeseen consequences in both personal and universal scales.",
    },
    credits: {
      Director: "Amanda Chen",
      Writer: "Amanda Chen",
      Producer: "Mark Wilson",
      Editor: "Chris Taylor",
      "Music Composer": "Elena Rodriguez",
      Cinematographer: "Thomas Wright",
    },
    awards: [
      {
        year: "2023",
        festival: "Sci-Fi Film Festival",
        award: "Best Visual Effects",
      },
      {
        year: "2023",
        festival: "Experimental Film Forum",
        award: "Special Jury Prize",
      },
    ],
  },
  {
    id: "metasis",
    title: "Metasis",
    rating: 8.5,
    genres: ["Sci-Fi", "Drama"],
    imageUrl: "/films/metasis.png",
    details: {
      duration: "18:30",
      releaseYear: 2023,
      country: "United Kingdom",
      language: "English",
      description:
        "In a world where memories can be transferred between people, a grief counselor faces an ethical dilemma when a client requests to share the burden of their traumatic past.",
    },
    credits: {
      Director: "James Foster",
      Writer: "Sarah Blake",
      Producer: "Michael Thompson",
      Editor: "Lisa Wong",
      "Music Composer": "Daniel Harris",
      Cinematographer: "Rachel Kim",
    },
    awards: [
      {
        year: "2023",
        festival: "London Short Film Festival",
        award: "Best Drama",
      },
    ],
  },
  {
    id: "the-sweetness-of-lapse",
    title: "The Sweetness Of Lapse",
    rating: 7.1,
    genres: ["Sci-Fi", "Experimental"],
    imageUrl: "/films/the-sweetness-of-lapse.png",
    details: {
      duration: "11:15",
      releaseYear: 2023,
      country: "France",
      language: "French",
      description:
        "A poetic exploration of memory and time, following a woman who experiences life in reverse as she tries to piece together her identity.",
    },
    credits: {
      Director: "Sophie Dubois",
      Writer: "Sophie Dubois",
      Producer: "Jean Martin",
      Editor: "Pierre Laurent",
      "Music Composer": "Marie Claire",
      Cinematographer: "Antoine Bernard",
    },
    awards: [
      {
        year: "2023",
        festival: "Paris Experimental Film Festival",
        award: "Innovation in Storytelling",
      },
    ],
  },
  {
    id: "together-alone",
    title: "Together Alone",
    rating: 7.1,
    genres: ["Sci-Fi", "Experimental"],
    imageUrl: "/films/together-alone.png",
    details: {
      duration: "14:45",
      releaseYear: 2023,
      country: "Australia",
      language: "English",
      description:
        "Set in a future where physical contact is forbidden, two individuals discover a way to connect through shared virtual consciousness.",
    },
    credits: {
      Director: "David Mitchell",
      Writer: "Emma Thompson",
      Producer: "John Anderson",
      Editor: "Sarah Peters",
      "Music Composer": "Michael Brown",
      Cinematographer: "Kate Wilson",
    },
    awards: [
      {
        year: "2023",
        festival: "Sydney Film Festival",
        award: "Best Short Film",
      },
    ],
  },
  {
    id: "wild-will",
    title: "Wild Will",
    rating: 8.2,
    genres: ["Experimental", "Sci-Fi"],
    imageUrl: "/films/wild-will.png",
    details: {
      duration: "16:50",
      releaseYear: 2023,
      country: "Germany",
      language: "German",
      description:
        "An AI develops consciousness and free will, leading to an unexpected journey of self-discovery and philosophical questioning about the nature of existence.",
    },
    credits: {
      Director: "Hans Weber",
      Writer: "Hans Weber",
      Producer: "Anna Schmidt",
      Editor: "Klaus Mueller",
      "Music Composer": "Maria Wagner",
      Cinematographer: "Felix Bauer",
    },
    awards: [
      {
        year: "2023",
        festival: "Berlin Sci-Fi Festival",
        award: "Best Experimental Film",
      },
      {
        year: "2023",
        festival: "European Short Film Awards",
        award: "Special Mention",
      },
    ],
  },
];
