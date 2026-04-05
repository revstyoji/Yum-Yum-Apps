export interface Food {
  id: string;
  name: string;
  price: number;
  description?: string;
  stock: number;
  imageUrl?: string;
}
export type FoodInput = Omit<Food, "id">;

export interface FoodsData {
  getAllFoods: Food[]; 
}

export interface FoodCardProps {
  item: Food;
  onEdit: (item: Food) => void;
  onDelete: (id: string) => void;
}