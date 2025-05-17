export interface User {
    id: number;
    name: string;
    email: string;
    role: string;
}
export type CreateUser = Omit<User, 'id'>;
export type UpdateUser = Omit<User, 'id'>;