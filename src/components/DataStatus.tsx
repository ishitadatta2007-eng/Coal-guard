import { Database, Server, ShieldCheck } from 'lucide-react';

const ROWS = [
  { label: 'Current Environment', value: 'Demonstration', icon: Server, tone: 'text-navy-700' },
  { label: 'Data', value: 'Simulated Prototype Dataset', icon: Database, tone: 'text-slate-700' },
  { label: 'Future Data Sources', value: 'Verified Government / Regulatory Datasets', icon: ShieldCheck, tone: 'text-emerald-700' },
];

export default function DataStatus() {
  return (
    <section className="card p-5">
      <div className="flex items-center gap-2">
        <Database className="h-4 w-4 text-navy-600" />
        <h2 className="section-title">Data Status</h2>
      </div>
      <div className="mt-4 divide-y divide-slate-100">
        {ROWS.map((r) => {
          const Icon = r.icon;
          return (
            <div key={r.label} className="flex items-center justify-between gap-4 py-2.5">
              <div className="flex items-center gap-2.5">
                <Icon className="h-4 w-4 text-slate-400" />
                <span className="text-sm text-slate-600">{r.label}</span>
              </div>
              <span className={`text-right text-sm font-medium ${r.tone}`}>{r.value}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
