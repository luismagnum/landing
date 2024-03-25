export interface IProduct {
    id: number;
    title: string;
    price:number;
    description:string;
    category: Category;
    image:string;
    rating: Rating;
}

export enum Category{
    Electronics = 'electonics',
    Jewelery = 'jewelery',
    MenSClothing = "men's clothing",
    WomenSClothing = "women's clothing",
}

export interface Rating{
    rate: number;
    count: number;
}
