import type { LucideIcon } from 'lucide-react';
import {
  Pickaxe,
  ClipboardCheck,
  Clock,
  TriangleAlert,
  Siren,
  Leaf,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react';
import type { KpiItem } from '@/types';

const ICONS: Record<string, LucideIcon> = {
  Pickaxe,
  ClipboardCheck,
  Clock,
  TriangleAlert,
  Siren,
  Leaf,
  ShieldCheck,
  ArrowUpRight,
};

const ACCENT: Record<string, { bg: string; text: string; ring: string; bar: string }> = {
  navy: { bg: 'bg-navy-50', text: 'text-navy-600', ring: 'ring-navy-200', bar: 'bg-navy-500' },
  accent: { bg: 'bg-accent-50', text: 'text-accent-700', ring: 'ring-accent-200', bar: 'bg-accent-500' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-700', ring: 'ring-amber-200', bar: 'bg-amber-500' },
  rose: { bg: 'bg-rose-50', text: 'text-rose-700', ring: 'ring-rose-200', bar: 'bg-rose-500' },
  sky: { bg: 'bg-sky-50', text: 'text-sky-700', ring: 'ring-sky-200', bar: 'bg-sky-500' },
};

export default function KpiCard({ item }: { item: KpiItem }) {
  const Icon = ICONS[item.icon] ?? Pickaxe;
  const a = ACCENT[item.accent];
  return (
    <div className="card card-hover p-4 sm:p-5">
      <div className="flex items-start justify-between">
        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${a.bg} ${a.text} ring-1 ring-inset ${a.ring}`}>
          <Icon className="h-5 w-5" strokeWidth={2} />
        </div>
        <span className="max-w-[9rem] text-right text-[11px] leading-tight text-slate-500">
          {item.context}
        </span>
      </div>
      <div className="mt-4">
        <p className="text-2xl font-bold text-navy-900 tabular-nums">{item.value.toLocaleString('en-IN')}</p>
        <p className="mt-0.5 text-sm text-slate-500">{item.title}</p>
      </div>
    </div>
  );
}
