import type { LucideIcon } from "lucide-react";

export interface StatItem {
  label: string;
  value: string | number;
  growth: string;
  icon: LucideIcon;
  variant: 'emerald' | 'blue' | 'violet' | 'orange';
}

export interface ChartData {
  day: string;
  val: number;
}