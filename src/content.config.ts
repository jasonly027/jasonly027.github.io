import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      genericName: z.string(),
      image: image(),
      icon: image().optional(),
      releaseDate: z.date(),
      period: z.string().regex(/^(Spring|Summer|Fall|Winter) \d{4}$/),
      languages: z.string().array(),
      stack: z.string().array(),
      link: z.string().url().optional(),
      site: z.string().optional(),
      deployment: z.string().optional(),
    }),
});

export const collections = { projects };
