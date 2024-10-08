import { defineCollection, z } from "astro:content"


const posts = defineCollection({
	schema: z.object({
    title: z.string(),
    description: z.string(),
		publishedDate: z.date(),
	}),
})

export const collections = {
	posts
}
