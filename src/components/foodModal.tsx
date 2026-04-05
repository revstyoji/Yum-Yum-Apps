import { X } from "lucide-react";
import type { FoodInput } from "../types/interface.foods";

interface FoodModalProps {
  isOpen: boolean;
  editingId: string | null;
  formData: FoodInput;
  onChange: (data: FoodInput) => void;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const FoodModal = ({ isOpen, editingId, formData, onChange, onClose, onSubmit }: FoodModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-md rounded-[2.5rem] p-8 shadow-2xl animate-in zoom-in-95 duration-200">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-black text-slate-900">{editingId ? 'Edit Menu Makanan' : 'Tambah Menu Baru'}</h3>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full"><X className="h-5 w-5 text-slate-400" /></button>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">Nama Menu</label>
            <input type="text" className="w-full p-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-red-100" value={formData.name} onChange={(e) => onChange({...formData, name: e.target.value})} required />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">Harga (IDR)</label>
              <input type="number" className="w-full p-3 rounded-xl border border-slate-200 outline-none" value={formData.price || ""} onChange={(e) => onChange({...formData, price: Number(e.target.value)})} required />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">Stok</label>
              <input type="number" className="w-full p-3 rounded-xl border border-slate-200 outline-none" value={formData.stock || ""} onChange={(e) => onChange({...formData, stock: Number(e.target.value)})} required />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">Deskripsi</label>
            <textarea className="w-full p-3 rounded-xl border border-slate-200 h-20 resize-none outline-none" value={formData.description} onChange={(e) => onChange({...formData, description: e.target.value})} />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">Link Gambar</label>
            <input type="text" className="w-full p-3 rounded-xl border border-slate-200 outline-none" placeholder="https://..." value={formData.imageUrl} onChange={(e) => onChange({...formData, imageUrl: e.target.value})} />
          </div>

          <button type="submit" className="w-full bg-red-500 text-white p-4 rounded-2xl font-bold hover:bg-red-600 transition-all shadow-lg mt-4 active:scale-95">
            {editingId ? 'Simpan Perubahan ✨' : 'Tambahkan ke Menu ✨'}
          </button>
        </form>
      </div>
    </div>
  );
};