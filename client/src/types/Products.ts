export interface TProducts {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  oldPrice?: number; // Optional since not all products might have it
  image: string;
  color: string;
  rating: number;
  author: string;
}