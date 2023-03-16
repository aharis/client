//Interfaces
export interface IBook {
  title: string;
  author: string;
  price: number;
  stock: number;
  reorder_notification: number;
}

export interface IUser {
  username: string;
  role: string;
  result: any;
}

export interface IPromotion {
  percentage: number;
  expiration_date: Date;
}

//State interfaces
export interface UserState {
  user: IUser;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string | any;
}

export interface BookState {
  book: IBook;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string | any;
}

export interface PromotionState {
  promotion: IPromotion;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string | any;
}
