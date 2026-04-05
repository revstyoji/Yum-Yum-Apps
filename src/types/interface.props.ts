import {type Food} from "./interface.foods"

export interface FoodCardProps {
  item: Food;
  onEdit: (item: Food) => void;
  onDelete: (id: string) => void;
}