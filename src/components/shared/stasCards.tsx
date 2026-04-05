import type { StatItem } from "@/types/interface.statsItems";
import { getVariantClasses } from "@/lib/ColorsHome";

export const StatCard = ({ label, value, growth, icon: Icon, variant }: StatItem) => (
  <div className="bg-white p-8 rounded-[1.5rem] border border-slate-100 shadow-sm transition-all hover:shadow-md group flex items-center gap-4">
    <div className={`p-3 rounded-xl text-white transition-transform duration-300 group-hover:scale-110 ${getVariantClasses(variant)}`}>
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{label}</p>
      <h3 className="text-lg font-extrabold text-slate-900 leading-tight">{value}</h3>
      <span className="text-[10px] font-bold text-emerald-600">{growth}</span>
    </div>
  </div>
);