import { form, query } from '$app/server';
import { serverClient as client } from '$lib/server/orpc.server';
import { userSchema } from '../orpc/schemas/users.schema';

export const getUsers = query('unchecked', async () => {
	return await client.user.list();
});

export const createUser = form(userSchema.omit({ id: true }), async ({ name, description }) => {
	const response = await client.user.create({ name, description });
	return response;
});
