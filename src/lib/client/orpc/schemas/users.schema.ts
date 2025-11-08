import { z } from 'zod';

export const userSchema = z.object({
	id: z.number().int().min(1),
	name: z.string(),
	description: z.string().optional()
});
