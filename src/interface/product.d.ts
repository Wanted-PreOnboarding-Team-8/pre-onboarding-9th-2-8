export interface IProduct {
  idx: number;
  name: string;
  mainImage: string;
  description: string;
  spaceCategory: string;
  price: number;
  maximumPurchases: string;
  registrationDate: string;
}

export interface IProductReducer {
  isLoading: boolean;
  error: string | null;
  products: IProduct[];
}

export interface IFilterProducts {
  minPrice: number;
  maxPrice: number;
}
