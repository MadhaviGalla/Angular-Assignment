export interface Customers {
    id?: number,
    firstName: string,
    lastName: string,
    gender: string,
    address: string,
    city: string,
    state: {
        abbreviation: string,
        name: string
    },

}
