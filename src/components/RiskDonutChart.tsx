import { RISK_DISTRIBUTION } from '@/data/mockData';

export default function RiskDonutChart() {
  const total = RISK_DISTRIBUTION.reduce((s, d) => s + d.count, 0);
  const radius = 70;
  const stroke = 22;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
      <div className="relative">
        <svg width="180" height="180" viewBox="0 0 180 180" className="-rotate-90">
          <circle cx="90" cy="90" r={radius} fill="none" stroke="#eef2f8" strokeWidth={stroke} />
          {RISK_DISTRIBUTION.map((d) => {
            const len = (d.count / total) * circumference;
            const dash = `${len} ${circumference - len}`;
            const el = (
              <circle
                key={d.level}
                cx="90"
                cy="90"
                r={radius}
                fill="none"
                stroke={d.color}
                strokeWidth={stroke}
                strokeDasharray={dash}
                strokeDashoffset={-offset}
                strokeLinecap="butt"
              />
            );
            offset += len;
            return el;
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-navy-900 tabular-nums">{total}</span>
          <span className="text-xs text-slate-500">Total Mines</span>
        </div>
      </div>
      <div className="w-full space-y-2.5 sm:w-auto">
        {RISK_DISTRIBUTION.map((d) => (
          <div key={d.level} className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: d.color }} />
              <span className="text-sm text-slate-600">{d.level} Risk</span>
            </div>
            <span className="text-sm font-semibold text-navy-900 tabular-nums">{d.count}</span>
          </div>
        ))}
        <div className="mt-1 flex items-center justify-between border-t border-slate-200 pt-2.5">
          <span className="text-sm font-medium text-navy-700">Total</span>
          <span className="text-sm font-bold text-navy-900 tabular-nums">{total}</span>
        </div>
      </div>
    </div>
  );
}
