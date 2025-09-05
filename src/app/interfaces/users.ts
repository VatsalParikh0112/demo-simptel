export interface users {
    id: number;
    name: string;
    password:string;
    email: string;
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}

export type SlimUser = Pick<users, 'id' | 'name' | 'email' | 'password'>;