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