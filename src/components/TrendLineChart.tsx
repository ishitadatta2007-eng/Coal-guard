import { TREND_DATA } from '@/data/mockData';

export default function TrendLineChart() {
  const width = 640;
  const height = 240;
  const pad = { top: 20, right: 20, bottom: 32, left: 36 };
  const innerW = width - pad.left - pad.right;
  const innerH = height - pad.top - pad.bottom;

  const allValues = TREND_DATA.flatMap((d) => [d.safety, d.environmental]);
  const maxVal = Math.ceil(Math.max(...allValues) / 10) * 10 + 10;
  const yTicks = 4;
  const tickStep = maxVal / yTicks;

  const xFor = (i: number) => pad.left + (innerW / (TREND_DATA.length - 1)) * i;
  const yFor = (v: number) => pad.top + innerH - (v / maxVal) * innerH;

  const linePath = (key: 'safety' | 'environmental') =>
    TREND_DATA.map((d, i) => `${i === 0 ? 'M' : 'L'} ${xFor(i)} ${yFor(d[key])}`).join(' ');

  const areaPath = (key: 'safety' | 'environmental') =>
    `${linePath(key)} L ${xFor(TREND_DATA.length - 1)} ${pad.top + innerH} L ${xFor(0)} ${pad.top + innerH} Z`;

  return (
    <div className="w-full">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full" role="img" aria-label="Safety and environmental alerts trend">
        <defs>
          <linearGradient id="gradSafety" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1f3566" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#1f3566" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradEnv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10d26c" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#10d26c" stopOpacity="0" />
          </linearGradient>
        </defs>

        {Array.from({ length: yTicks + 1 }).map((_, i) => {
          const v = i * tickStep;
          const y = yFor(v);
          return (
            <g key={i}>
              <line x1={pad.left} y1={y} x2={width - pad.right} y2={y} stroke="#eef2f8" strokeWidth={1} />
              <text x={pad.left - 8} y={y + 4} textAnchor="end" className="fill-slate-400" fontSize={10}>
                {Math.round(v)}
              </text>
            </g>
          );
        })}

        <path d={areaPath('environmental')} fill="url(#gradEnv)" />
        <path d={areaPath('safety')} fill="url(#gradSafety)" />

        <path d={linePath('environmental')} fill="none" stroke="#10d26c" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
        <path d={linePath('safety')} fill="none" stroke="#1f3566" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />

        {TREND_DATA.map((d, i) => (
          <g key={d.month}>
            <circle cx={xFor(i)} cy={yFor(d.safety)} r={3.5} fill="#fff" stroke="#1f3566" strokeWidth={2} />
            <circle cx={xFor(i)} cy={yFor(d.environmental)} r={3.5} fill="#fff" stroke="#10d26c" strokeWidth={2} />
            <text x={xFor(i)} y={height - 10} textAnchor="middle" className="fill-slate-500" fontSize={11}>
              {d.month}
            </text>
          </g>
        ))}
      </svg>
      <div className="mt-2 flex items-center justify-center gap-6">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-navy-700" />
          <span className="text-xs text-slate-600">Safety Alerts</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-accent-500" />
          <span className="text-xs text-slate-600">Environmental Alerts</span>
        </div>
      </div>
    </div>
  );
}
