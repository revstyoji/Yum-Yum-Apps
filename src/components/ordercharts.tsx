
import type { ChartData } from "@/types/interface.statsItems";

const MOCK_CHART_DATA: ChartData[] = [
  { day: "Sen", val: 60 }, { day: "Sel", val: 100 }, { day: "Rab", val: 80 },
  { day: "Kam", val: 140 }, { day: "Jum", val: 120 }, { day: "Sab", val: 90 }, { day: "Min", val: 50 },
];

interface OrderChartProps {
  maxLimit?: number;
}

export const OrderChart = ({ maxLimit = 160 }: OrderChartProps) => {
  return (
    <div className="relative h-70 w-full flex items-end justify-between px-2 sm:px-10">
      
      <ChartGrid maxLimit={maxLimit} />

      {MOCK_CHART_DATA.map((item) => (
        <BarItem key={item.day} item={item} maxLimit={maxLimit} />
      ))}

    </div>
  );
};


const ChartGrid = ({ maxLimit }: { maxLimit: number }) => {
  const intervals = [maxLimit, maxLimit * 0.75, maxLimit * 0.5, maxLimit * 0.25, 0];
  
  return (
    <div className="absolute inset-0 flex flex-col justify-between pt-2 pb-10">
      {intervals.map((val) => (
        <div key={val} className="w-full flex items-center gap-4">
          <span className="text-[9px] text-slate-300 w-6 font-mono font-medium">{Math.round(val)}</span>
          <div className="flex-1 h-px bg-slate-100/50 border-t border-dashed" />
        </div>
      ))}
    </div>
  );
};

const BarItem = ({ item, maxLimit }: { item: ChartData; maxLimit: number }) => {
  const barHeight = (item.val / maxLimit) * 200;

  return (
    <div className="relative z-10 flex flex-col items-center group/bar w-full">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded-lg opacity-0 group-hover/bar:opacity-100 group-hover/bar:-top-12 transition-all duration-300 pointer-events-none font-bold shadow-xl z-30">
        {item.val} items
      </div>
      <div
        style={{ height: `${barHeight}px` }}
        className="w-6 sm:w-10 bg-linear-to-t from-lime-600 to-lime-300 bg-cover rounded-t-xl rounded-b-md transition-all duration-500 ease-out group-hover/bar:from-lime-600 group-hover/bar:to-lime-300 group-hover/bar:w-8 sm:group-hover/bar:w-12 shadow-sm relative"
      >
        <div className="absolute top-0 left-0 w-full bg-white/20 rounded-t-xl" />
      </div>
      <span className="text-[10px] font-bold text-slate-400 mt-3 group-hover/bar:text-lime-400 transition-colors uppercase tracking-widest">
        {item.day}
      </span>
    </div>
  );
};