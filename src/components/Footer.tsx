import { ShieldAlert } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-500/15 ring-1 ring-inset ring-accent-500/30">
              <ShieldAlert className="h-4 w-4 text-accent-600" />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-navy-900">CoalGuard AI — Prototype for Smart India Hackathon</p>
              <p className="text-[11px] text-slate-500">
                AI-enabled e-governance concept for coal mine safety, compliance and environmental monitoring.
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-md border border-amber-300 bg-amber-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-amber-800">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            Demo Environment
          </span>
        </div>
      </div>
    </footer>
  );
}
