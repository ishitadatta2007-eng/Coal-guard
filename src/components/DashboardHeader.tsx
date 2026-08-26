import { Download, RefreshCw } from 'lucide-react';

interface Props {
  onExport?: () => void;
  onRefresh?: () => void;
}

export default function DashboardHeader({ onExport, onRefresh }: Props) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs">
          <span className="font-medium text-slate-500">Last updated: 24 Aug 2026, 17:45 IST</span>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-amber-100 px-2 py-0.5 font-semibold uppercase tracking-wide text-amber-800 ring-1 ring-inset ring-amber-200">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            Demo Environment
          </span>
        </div>
        <h1 className="mt-2 text-2xl font-bold text-navy-900 sm:text-3xl">Coal Mine Governance Dashboard</h1>
        <p className="mt-1 text-sm text-slate-500 sm:text-base">
          Integrated monitoring of mine inspections, statutory compliance, safety and environmental risks.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={onExport}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-navy-700 shadow-card transition-colors hover:bg-slate-50"
        >
          <Download className="h-4 w-4" />
          Export Report
        </button>
        <button
          onClick={onRefresh}
          className="inline-flex items-center gap-2 rounded-lg bg-navy-700 px-3.5 py-2 text-sm font-medium text-white shadow-card transition-colors hover:bg-navy-800"
        >
          <RefreshCw className="h-4 w-4" />
          Refresh Data
        </button>
      </div>
    </div>
  );
}
