export interface IProduct {
  category: string
  description: string
  id: number
  image: string
  price: number
  rating: { rate: number, count: number }
  title: string
}

export interface IProductsSlice {
  products: IProduct[];
  status: EProductsSliceStatus;
  limit: string;
}

export enum EProductsSliceStatus {
  Loading = 'loading',
  Success = 'success',
  Error = 'error'
}