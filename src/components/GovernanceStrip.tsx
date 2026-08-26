import { ShieldCheck } from 'lucide-react';

const METRICS = [
  { label: 'Safety Compliance', value: 86, tone: 'green' as const },
  { label: 'Environmental Compliance', value: 78, tone: 'amber' as const },
  { label: 'Regulatory Compliance', value: 82, tone: 'green' as const },
  { label: 'Inspection Coverage', value: 91, tone: 'green' as const },
];

const TONE = {
  green: { bar: 'bg-emerald-500', text: 'text-emerald-700' },
  amber: { bar: 'bg-amber-500', text: 'text-amber-700' },
  red: { bar: 'bg-rose-500', text: 'text-rose-700' },
};

export default function GovernanceStrip() {
  return (
    <section className="card p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-navy-600" />
          <h2 className="section-title">Governance Monitoring</h2>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-md bg-amber-50 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-amber-800 ring-1 ring-inset ring-amber-200">
          Prototype / Demo Data
        </span>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {METRICS.map((m) => {
          const tone = TONE[m.tone];
          return (
            <div key={m.label}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-600">{m.label}</span>
                <span className={`text-xs font-semibold tabular-nums ${tone.text}`}>{m.value}%</span>
              </div>
              <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                <div className={`h-full rounded-full ${tone.bar}`} style={{ width: `${m.value}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
