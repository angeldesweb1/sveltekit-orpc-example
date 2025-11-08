import { form, query } from '$app/server';
import { serverClient as client } from '$lib/server/orpc.server';
import { userSchema } from './router';

export const getUsers = query('unchecked', async () => {
	return await client.user.listUsers();
});

export const createUser = form(userSchema.omit({ id: true }), async ({ name, description }) => {
	const response = await client.user.createUser({ name, description });
	console.log({ response });
});
