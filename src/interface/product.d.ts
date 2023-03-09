export interface IProduct {
  idx: number;
  name: string;
  mainImage: string;
  description: string;
  spaceCategory: string;
  price: number;
  maximumPurchases: number;
  registrationDate: string;
  quantity: number;
}

export interface IProductReducer {
  isLoading: boolean;
  error: string | null;
  products: IProduct[];
}
