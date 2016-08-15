export interface Result {
    id: string;
    name: string;
    contact?: Contact;
    location?: Location;
    categories?: Category[];
    verified?: boolean;
}

export interface Contact {
    formattedPhone: string;
    twitter: string;
    facebookName: string;
}

export interface Location {
    formattedAddress: string;
}

export interface Category {
    pluralName: string;
}
