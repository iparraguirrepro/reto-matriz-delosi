import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const dynamicPagesFromDatabase: { name: string; updatedAt: string }[] = [];

    const sitemap = dynamicPagesFromDatabase.map((e: any) => ({
      url: `https://reto-delosi/${e.name}`,
      lastModified: e?.updatedAt
        ? new Date(e.updatedAt).toISOString()
        : undefined,
    }));

    const basePages: MetadataRoute.Sitemap = [
      {
        url: "https://reto-delosi/",
        lastModified: new Date().toISOString(),
      },
      {
        url: "https://reto-delosi/descubrir",
        lastModified: new Date().toISOString(),
      },
      {
        url: "https://reto-delosi/blog",
        lastModified: new Date().toISOString(),
      },
    ];

    return [...basePages, ...sitemap];
  } catch (err) {
    console.error("sitemap error:", err);
    return [
      {
        url: "https://reto-delosi/",
        lastModified: new Date().toISOString(),
      },
    ];
  }
}
