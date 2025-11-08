import { createUser, listUsers } from './routes/users';

export const router = {
	user: {
		list: listUsers,
		create: createUser
	}
};
