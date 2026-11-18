export type Section = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  table?: { headers: string[]; rows: string[][] };
};

export type Faq = { q: string; a: string };

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  dateLabel: string;
  excerpt: string;
  sources: { label: string; url: string }[];
  sections: Section[];
  faqs?: Faq[];
};

import { POSTS_A } from "./posts-a";
import { POSTS_B } from "./posts-b";

export const POSTS: Post[] = [...POSTS_A, ...POSTS_B];

export const POST_BY_SLUG = new Map(POSTS.map((p) => [p.slug, p]));
