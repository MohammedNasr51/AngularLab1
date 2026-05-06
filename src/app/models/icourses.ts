export interface ICourse {
  id: number;
  title: string;
  instructor: string;
  price: number;
  seats: number;
  image: string;
  catId: number;
}
export interface ICategory {
  id: number;
  name: string;
}