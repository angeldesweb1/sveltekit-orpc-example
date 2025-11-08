import { os } from '@orpc/server';
import { z } from 'zod';
import { users } from './dummy.data';

export const userSchema = z.object({
	id: z.number().int().min(1),
	name: z.string(),
	description: z.string().optional()
});

export const listUsers = os.handler(() => users);
export const createUser = os.input(userSchema.omit({ id: true })).handler(({ input }) => input);

export const router = {
	user: {
		listUsers,
		createUser
	}
};
