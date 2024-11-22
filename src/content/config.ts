import { z, defineCollection } from 'astro:content';

// see https://docs.astro.build/en/guides/content-collections/
// see https://docs.astro.build/en/guides/images/

// SEE https://5-0-0-beta.docs.astro.build/en/guides/content-collections/

const newsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => {
    z.object({
      date: z.date().optional(),
      title: z.string(),
      summary: z.string().optional(),
      author: z.string().optional(),
      image: image(),
      hero_image: image(),
      image_source: z.string().optional(),
      coach: z.string().optional(),
    })
  },
});

export const collections = {
  news: newsCollection,
};
