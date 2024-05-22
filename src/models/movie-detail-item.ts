import { Movie } from "./movie-item";

export interface MovieDetailItem {
  fake: Movie;
  imbId: string;
  short: Short;
}

interface Short {
  "@context": string;
  "@type": "Movie";
  url: string;
  name: string;
  image: string;
  description: string;
  review: Review;
  aggregateRating: AggregateRating;
  contentRating: string;
  genre: string[];
  datePublished: string;
  keywords: string;
  trailer: VideoObject;
  actor: Person[];
  director: Person[];
  creator: (Person | Organization)[];
  duration: string;
}

interface Review {
  "@type": "Review";
  itemReviewed: {
    "@type": "Movie";
    url: string;
  };
  author: {
    "@type": "Person";
    name: string;
  };
  dateCreated: string;
  inLanguage: string;
  name: string;
  reviewBody: string;
  reviewRating?: Rating;
}

interface Rating {
  "@type": "Rating";
  worstRating: number;
  bestRating: number;
  ratingValue: number;
}

interface AggregateRating {
  "@type": "AggregateRating";
  ratingCount: number;
  bestRating: number;
  worstRating: number;
  ratingValue: number;
}

interface VideoObject {
  "@type": "VideoObject";
  name: string;
  embedUrl: string;
  thumbnail: ImageObject;
  thumbnailUrl: string;
  url: string;
  description: string;
  duration: string;
  uploadDate: string;
}

interface ImageObject {
  "@type": "ImageObject";
  contentUrl: string;
}

interface Person {
  "@type": "Person";
  url: string;
  name: string;
}

interface Organization {
  "@type": "Organization";
  url: string;
}
