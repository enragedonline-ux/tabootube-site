import type { Section, Faq } from "./posts";

export type Pillar = {
  title: string;
  description: string;
  h1: string;
  intro: string[];
  sections: Section[];
  faqs: Faq[];
};

export { PILLAR } from "./pillar-content";
