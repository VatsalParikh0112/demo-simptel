export interface users {
    id: number;
    name: string;
    password: string;
    email: string;
}

export type SlimUser = Pick<users, 'id' | 'name' | 'email' | 'password'>;