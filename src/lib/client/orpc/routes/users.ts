import { os } from '@orpc/server';
import { users } from '../dummy';
import { userSchema } from '../schemas/users.schema';

export const listUsers = os.handler(() => users);
export const createUser = os.input(userSchema.omit({ id: true })).handler(({ input }) => input);
