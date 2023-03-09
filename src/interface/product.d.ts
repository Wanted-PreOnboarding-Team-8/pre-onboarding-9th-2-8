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

export interface IFilterPriceProducts {
  minPrice: number;
  maxPrice: number;
}

export interface IFilterCategoryProducts {
  spaceCategory: string[];
}
