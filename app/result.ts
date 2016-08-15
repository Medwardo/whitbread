export interface Result {
    Id: string;
    Name: string;
    Contact?: Contact;
    Location?: Location;
    Categories?: Category[];
    Verified?: boolean;
}

export interface Contact {
    FormattedPhone: string;
    Twitter: string;
    FacebookName: string;
}

export interface Location {
    FormattedAddress: string;
}

export interface Category {
    PluralName: string;
}
