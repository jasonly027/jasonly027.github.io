import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      image: z.object({
        src: image(),
        alt: z.string(),
      }),
      languages: z.string().array(),
      tools: z.string().array(),
      description: z.string(),
    }),
});

export const collections = {
  projects: projectsCollection,
};
