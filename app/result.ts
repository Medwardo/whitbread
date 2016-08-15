export interface Result {
    id: string;
    name: string;
    contact?: Contact;
    location?: Location;
    categories?: Category[];
    verified?: boolean;
    url?: string;
}

export interface Contact {
    formattedPhone: string;
    twitter: string;
    facebookName: string;
}

export interface Location {
    address: string;
    city: string;
    formattedAddress: string;
}

export interface Category {
    pluralName: string;
}
