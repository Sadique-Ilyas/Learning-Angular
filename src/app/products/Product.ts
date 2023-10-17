// To parse this data:
//
//   import { Convert, Welcome } from "./file";
//
//   const welcome = Convert.toWelcome(json);

export interface Welcome {
    products: Product[];
    total:    number;
    skip:     number;
    limit:    number;
}

export interface Product {
    id:                 number;
    title:              string;
    description:        string;
    price:              number;
    discountPercentage: number;
    rating:             number;
    stock:              number;
    brand:              string;
    category:           string;
    thumbnail:          string;
    images:             string[];
}

// Converts JSON strings to/from your types
export class Convert {
    public static toWelcome(json: string): Welcome {
        return JSON.parse(json);
    }

    public static welcomeToJson(value: Welcome): string {
        return JSON.stringify(value);
    }
}
