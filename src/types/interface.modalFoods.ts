import {type FoodInput} from "./interface.foods"

export interface FoodModalProps {
  isOpen: boolean;
  editingId: string | null;
  formData: FoodInput;
  setFormData: (data: FoodInput) => void;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
}