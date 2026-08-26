import { Search, Bell, ChevronDown, Menu, ShieldAlert } from 'lucide-react';

interface Props {
  onMenuClick: () => void;
}

export default function TopBar({ onMenuClick }: Props) {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-slate-200 bg-white/95 px-4 backdrop-blur lg:px-6">
      <button
        onClick={onMenuClick}
        className="rounded-lg p-2 text-navy-700 hover:bg-slate-100 lg:hidden"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      <div className="flex items-center gap-2 lg:hidden">
        <ShieldAlert className="h-5 w-5 text-accent-500" />
        <div className="leading-tight">
          <span className="text-sm font-bold text-navy-800">CoalGuard AI</span>
          <p className="text-[10px] text-slate-500">Regulatory Monitoring System</p>
        </div>
      </div>

      <div className="hidden items-center gap-2.5 lg:flex">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-500/15 ring-1 ring-inset ring-accent-500/30">
          <ShieldAlert className="h-5 w-5 text-accent-600" />
        </div>
        <div className="leading-tight">
          <p className="text-sm font-bold text-navy-900">CoalGuard AI</p>
          <p className="text-[11px] text-slate-500">Coal Mining Governance &amp; Regulatory Monitoring System</p>
        </div>
      </div>

      <div className="relative hidden max-w-md flex-1 sm:block lg:max-w-sm">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Search mines, inspections, reports..."
          className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm text-navy-800 placeholder:text-slate-400 focus:border-navy-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-navy-100"
        />
      </div>

      <div className="ml-auto flex items-center gap-2 sm:gap-3">
        <span className="hidden items-center gap-1.5 rounded-md border border-amber-300 bg-amber-50 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-amber-800 sm:inline-flex">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
          Demo Environment
        </span>
        <button className="relative rounded-lg p-2 text-navy-700 hover:bg-slate-100" aria-label="Notifications">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white" />
        </button>
        <div className="flex items-center gap-2.5 rounded-lg py-1 pl-1 pr-2 sm:hover:bg-slate-50">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-700 text-sm font-semibold text-white">
            GA
          </div>
          <div className="hidden leading-tight sm:block">
            <p className="text-sm font-semibold text-navy-900">Government Authority</p>
            <p className="text-[11px] text-slate-500">Government Level</p>
          </div>
          <ChevronDown className="hidden h-4 w-4 text-slate-400 sm:block" />
        </div>
      </div>
    </header>
  );
}
