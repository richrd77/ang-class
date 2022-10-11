export class User {
    id: number;
    name: string;
    username: string;
    address: Address;
    phone: string;
    website: string;

    constructor({ id, name, username, address, phone, website }: any) {
        this.id = id; this.name = name; this.username = username;
        this.phone = phone; this.website = website;
        this.address = new Address(address);
    }
}

export class Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;

    constructor({ street, suite, city, zipcode }: any) {
        this.street = street; this.suite = suite;
        this.city = city; this.zipcode = zipcode;
    }
}