import { error, json, type RequestHandler } from '@sveltejs/kit';
import { RPCHandler } from '@orpc/server/fetch';
import { onError } from '@orpc/server';
import { router } from '$lib/orpc/router';

const handler = new RPCHandler(router, {
	interceptors: [
		onError((err: unknown) => {
			console.error({ error: err });
			throw error(400, err as Error);
		})
	]
});

const handle: RequestHandler = async ({ request, url }) => {
	const requrl = url.pathname;
	console.log({ requrl });
	const { matched, response } = await handler.handle(request, {
		prefix: '/api/rpc',
		context: {} // Provide initial context if needed
	});

	console.log({ matched });

	return response ?? json({ message: 'not found' });
};

export const GET = handle;
export const POST = handle;
export const PUT = handle;
export const PATCH = handle;
export const DELETE = handle;
