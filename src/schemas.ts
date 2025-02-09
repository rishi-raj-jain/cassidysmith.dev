import { z, type SchemaContext } from 'astro:content'

export const photoSchema = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    draft: z.boolean().default(true),
    sortOrder: z.number(),
    image: z.object({
      src: image(),
      description: z.string(),
    }),
  })
