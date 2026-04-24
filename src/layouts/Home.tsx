import { ShoppingCart, Users, TrendingUp, DollarSign } from "lucide-react";
import { StatCard } from "@/components/shared/stasCards";
import { OrderChart } from "@/components/ordercharts";
import type { StatItem } from "@/types/interface.statsItems";

const STATS_CONFIG: StatItem[] = [
  { label: "Pendapatan", value: "Rp100.000", growth: "+20.1%", icon: DollarSign, variant: 'lime' },
  { label: "Pemesanan", value: "1,234", growth: "+12.5%", icon: ShoppingCart, variant: 'lime' },
  { label: "Pelanggan", value: "856", growth: "+8.3%", icon: Users, variant: 'lime' },
  { label: "Growth", value: "23.5%", growth: "+4.2%", icon: TrendingUp, variant: 'lime' },
];

export const Home = () => {
  return (
    <div className="space-y-8 p-6">
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {STATS_CONFIG.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </section>
      <section className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
        <header className="flex justify-between items-start mb-10">
           <div>
              <h3 className="text-2xl font-bold text-slate-900">Statistik Pesanan</h3>
              <p className="text-xs text-slate-400 italic">Data real-time YumYum</p>
           </div>
        </header>     
        <OrderChart maxLimit={160} />
      </section>
    </div>
  );
};