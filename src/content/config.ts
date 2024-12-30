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
		summary: z.string().optional()	}),
});

const projects = defineCollection({
	type: 'content',
	schema: () => z.object({
		name: z.string(),
		type: z.string(),
		org: z.string(),
		github: z.string().optional(),
		demo: z.string().optional(),
		tags: z.array(z.string()).optional(),
		date: z.coerce.date(),
		desc: z.string(),
	}),
})
export const collections = { blog, careers, projects };
