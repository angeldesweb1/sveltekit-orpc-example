interface User {
	id: number;
	name: string;
	description?: string;
}

export const users: User[] = [
	{
		id: 1,
		name: 'Jhon Doe'
	},
	{
		id: 2,
		name: 'Chris Allen'
	},
	{
		id: 3,
		name: 'Helen Doe'
	}
];
