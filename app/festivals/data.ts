export interface Festival {
  id: string;
  title: string;
  date: string;
  location: string;
  imageUrl: string;
  popularity: number;
  status: "ongoing" | "upcoming" | "ended";
  dateAdded: string; // ISO date string
  description?: string;
}

export const festivals: Festival[] = [
  {
    id: "sundance-2023",
    title: "2023 Sundance Film Festival",
    date: "1/18–1/28",
    location: "Salt Lake City, Utah",
    imageUrl: "/festivals/sundance-2023.png",
    popularity: 98,
    status: "ended",
    dateAdded: "2023-01-01",
    description:
      "The Sundance Film Festival is the ultimate gathering of original storytellers and audiences. Experience the premier showcase for new independent film, both in-person and online.",
  },
  {
    id: "oscar-shorts-2023",
    title: "2023 Oscars Short Films",
    date: "2/17-3/21",
    location: "Los Angeles, California",
    imageUrl: "/festivals/oscar-shorts-2023.png",
    popularity: 95,
    status: "ongoing",
    dateAdded: "2023-02-01",
    description:
      "The Oscars Short Films showcase the best in short filmmaking, from animation to live action.",
  },
  {
    id: "cannes-2023",
    title: "2023 Cannes Film Festival",
    date: "5/25-5/27",
    location: "Cannes, France",
    imageUrl: "/festivals/cannes-2023.png",
    popularity: 92,
    status: "ongoing",
    dateAdded: "2023-05-01",
    description:
      "The Cannes Film Festival is the most prestigious film festival in the world, showcasing the best in cinema from around the world.",
  },
];
