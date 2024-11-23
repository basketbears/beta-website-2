import { defineCollection, z, reference } from 'astro:content';
import { /*glob,*/ file } from 'astro/loaders';

// 3. Define your collection(s)
const news = defineCollection({
  // TODO: find out why the slug is missing if the loader is defined.
  // without loader it works just fine
  // loader: glob({ pattern: '**\/*.{md,mdx}', base: "./src/content/news" }),
  schema: ({ image }) => {
    return z.object({
      date: z.date(),
      title: z.string(),
      summary: z.string().optional(),
      author: z.string().optional(),
      image: image(),
      hero_image: image().optional(),
      image_source: z.string().optional(),
      gallery: z.array(z.object({
        image: image(),
      })).optional(),
      players: z.array(reference('people')).optional(),
      coach: reference('people').optional(),
    })
  },
});

const people = defineCollection({
  loader: file('src/content/people.json'),
  schema: ({ image }) => {
    return z.object({
      firstName: z.string(),
      lastName: z.string(),
      displayName: z.string(),
      profileImage: image(),
      isPlayer: z.boolean(),
      playerInfo: z.object({
        number: z.number(),
        cardImage: image(),
      }),
    })
  },
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { news, people };
