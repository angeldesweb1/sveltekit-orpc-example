import { query } from '$app/server';
import { serverClient as client } from '$lib/server/orpc.server';

// const client: RouterClient<typeof router> = serverClient ?? createORPCClient(link);

export const getUsers = query('unchecked', async () => {
	return await client.user.listUsers();
});
