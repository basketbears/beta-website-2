// 1. Import utilities from `astro:content`
import { defineCollection, z, reference } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const news = defineCollection({
  schema: ({ image }) => {
    return z.object({
      date: z.date().optional(),
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
