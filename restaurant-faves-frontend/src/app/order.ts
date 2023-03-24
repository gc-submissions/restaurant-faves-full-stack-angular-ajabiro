//The properties here need to mirror what is in the JSON casing wise, and NOT the database
export interface Order {
    id: number;
    description: string;
    restaurant: string;
    rating: number;
    orderAgain: boolean;
}
