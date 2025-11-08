import { json } from '@sveltejs/kit';

export const GET = () => {
	return json({ message: 'Hello from http. Still works.' });
};

export const POST = async ({ request }) => {
	const data = await request.json();

	return json(data);
};
