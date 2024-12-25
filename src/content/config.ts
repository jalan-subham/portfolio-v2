import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
    seoTitle: z.string().optional(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
		coverImage: image()
      .refine((img) => img.width >= 960, {
        message: 'Cover image must be at least 960 pixels wide!'
      })
      .optional()
	}),
});
const careers = defineCollection({
	type: 'content',
	schema: () => z.object({
		company: z.string(),
		title: z.string(),
		startDate: z.coerce.date(),
		endDate: z.coerce.date(),
		summary: z.string().optional(),
	}),
});

export const collections = { blog, careers };
