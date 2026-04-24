import { Edit2, Trash2, UtensilsCrossed } from "lucide-react";
import type { FoodCardProps } from "../../types/interface.foods";


export const FoodCard = ({ item, onEdit, onDelete }: FoodCardProps) => {
  const formattedPrice = new Intl.NumberFormat('id-ID', { 
    style: 'currency', currency: 'IDR', maximumFractionDigits: 0 
  }).format(item.price);

  return (
    <div className="group bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="h-44 bg-linear-to-br from-orange-100 to-red-50 relative flex items-center justify-center">
        {item.imageUrl ? (
          <img 
            src={item.imageUrl} 
            alt={item.name} 
            className="w-full h-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).src = "https://placehold.co/400x300?text=Gambar+Bermasalah"; }}
          />
        ) : (
          <UtensilsCrossed className="h-12 w-12 text-orange-200" />
        )}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-slate-900 text-lg line-clamp-1">{item.name}</h3>
          <span className="font-extrabold text-slate-900 text-sm bg-slate-50 px-2 py-1 rounded-lg">{formattedPrice}</span>
        </div>
        <p className="text-xs text-slate-400 mb-4 line-clamp-2">{item.description || "Tidak ada deskripsi"}</p>
        <div className="flex gap-2">
          <button onClick={() => onEdit(item)} className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-slate-50 text-slate-600 rounded-xl hover:bg-slate-900 hover:text-white transition-all font-bold text-xs border border-slate-100">
            <Edit2 className="h-3.5 w-3.5" /> Edit
          </button>
          <button onClick={() => onDelete(item.id)} className="px-3 py-2.5 bg-slate-50 text-slate-400 rounded-xl hover:bg-lime-600 hover:text-white transition-all border border-slate-100">
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};