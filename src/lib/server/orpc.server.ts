import type { RouterClient } from '@orpc/server';
import { createORPCClient } from '@orpc/client';
import { RPCLink } from '@orpc/client/fetch';
import { getRequestEvent } from '$app/server';
import type { router } from '../orpc/router';

const link = new RPCLink({
	url: () => {
		const url = getRequestEvent().url.origin;
		return `${url}/api/rpc`;
	},
	async fetch(request, init) {
		return getRequestEvent().fetch(request, init);
	}
});

export const serverClient: RouterClient<typeof router> = createORPCClient(link);
