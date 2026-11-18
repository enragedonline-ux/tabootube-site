import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { POSTS } from "@/lib/posts";

const DATE = new Date();

function entry(path: string, priority: number): MetadataRoute.Sitemap[number] {
  return {
    url: `${SITE_URL}${path}`,
    lastModified: DATE,
    changeFrequency: "weekly",
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    entry("/", 1),
    entry("/blog/", 0.8),
    ...POSTS.map((p) => entry(`/blog/${p.slug}/`, 0.7)),
    entry("/privacy-policy/", 0.5),
    entry("/dmca-policy/", 0.5),
    entry("/disclaimer/", 0.5),
    entry("/contact-us/", 0.5),
  ];
}
