import { useState } from "react";
import { Plus, Loader2 } from "lucide-react";
import { useFoods } from "../hooks/usefoods";
import { FoodCard } from "../components/shared/card";
import { FoodModal } from "../components/foodModal";
import type { Food, FoodInput } from "../types/interface.foods";

const INITIAL_FORM: FoodInput = { name: "", price: 0, stock: 0, description: "", imageUrl: "" };
export default function PageMenu() {
  const { foods, loading, error, handleDelete, createFood, updateFood } = useFoods();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<FoodInput>(INITIAL_FORM);

  if (loading) return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-4 text-slate-500">
      <Loader2 className="h-10 w-10 animate-spin text-red-500" />
      <p className="font-bold animate-pulse">Lagi nyiapin menu makanan 🍳</p>
    </div>
  );

  if (error) return (
    <div className="p-8 text-center bg-red-50 text-red-600 rounded-3xl border border-red-100 m-8">
      <h2 className="font-black text-xl">Koneksi Putus! 🔌</h2>
      <p className="text-sm opacity-80">{error.message}</p>
    </div>
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateFood({ variables: { update: { id: editingId, ...formData } } });
      } else {
        await createFood({ variables: { input: formData } });
      }
      closeModal();
    } catch (err) { alert("Gagal simpan: " + err); }
  };

  const openEdit = (item: Food) => {
    setEditingId(item.id);
    setFormData({ 
      name: item.name, 
      price: item.price, 
      stock: item.stock, 
      description: item.description || "", 
      imageUrl: item.imageUrl || "" 
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
    setFormData(INITIAL_FORM);
  };

  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500 relative">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight underline decoration-red-200 decoration-4 underline-offset-4">Manajemen Menu</h2>
          <p className="text-sm text-slate-500">Ditemukan {foods.length} menu di database</p>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-xl hover:bg-slate-800 transition-all shadow-lg font-bold text-sm">
          <Plus className="h-4 w-4" /> Tambah Menu
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {foods.map((item: Food) => (
          <FoodCard key={item.id} item={item} onEdit={openEdit} onDelete={handleDelete} />
        ))}
      </div>

      <FoodModal 
        isOpen={isModalOpen} 
        editingId={editingId} 
        formData={formData} 
        onChange={setFormData}
        onClose={closeModal}
        onSubmit={handleSubmit}
      />
    </div>
  );
}