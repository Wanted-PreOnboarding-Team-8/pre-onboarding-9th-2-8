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
  filter: { priceRange: RangeType; spaceList: string[] };
}
