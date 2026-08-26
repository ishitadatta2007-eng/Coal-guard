import {
  LayoutDashboard,
  Pickaxe,
  ClipboardList,
  HardHat,
  Leaf,
  Scale,
  Brain,
  FileText,
  ArrowUpRight,
  FileBarChart,
  Settings,
  ShieldAlert,
} from 'lucide-react';

export type PageId =
  | 'dashboard'
  | 'mines'
  | 'inspections'
  | 'safety'
  | 'environment'
  | 'violations'
  | 'risk'
  | 'documents'
  | 'escalations'
  | 'reports'
  | 'settings';

interface NavItem {
  id: PageId;
  label: string;
  icon: typeof LayoutDashboard;
}

const NAV: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'mines', label: 'Mine Registry', icon: Pickaxe },
  { id: 'inspections', label: 'Field Inspections', icon: ClipboardList },
  { id: 'safety', label: 'Safety Compliance', icon: HardHat },
  { id: 'environment', label: 'Environmental Compliance', icon: Leaf },
  { id: 'violations', label: 'Regulatory Violations', icon: Scale },
  { id: 'risk', label: 'Risk Intelligence', icon: Brain },
  { id: 'documents', label: 'Documents & OCR', icon: FileText },
  { id: 'escalations', label: 'Escalations', icon: ArrowUpRight },
  { id: 'reports', label: 'Reports', icon: FileBarChart },
  { id: 'settings', label: 'Settings', icon: Settings },
];

interface Props {
  active: PageId;
  onNavigate: (id: PageId) => void;
  mobileOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ active, onNavigate, mobileOpen, onClose }: Props) {
  return (
    <>
      {mobileOpen && (
        <div className="fixed inset-0 z-30 bg-navy-950/50 backdrop-blur-sm lg:hidden" onClick={onClose} aria-hidden />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col bg-navy-800 text-navy-100 transition-transform duration-200 lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-16 items-center gap-2.5 border-b border-navy-700/60 px-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-500/15 ring-1 ring-inset ring-accent-500/30">
            <ShieldAlert className="h-5 w-5 text-accent-400" />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-bold text-white">CoalGuard AI</p>
            <p className="text-[11px] text-navy-300">AI-Enabled Mine Governance</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto scrollbar-thin px-3 py-4">
          {NAV.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  onClose();
                }}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-navy-600 text-white shadow-sm'
                    : 'text-navy-200 hover:bg-navy-700/60 hover:text-white'
                }`}
              >
                <Icon className="h-[18px] w-[18px] shrink-0" strokeWidth={2} />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="border-t border-navy-700/60 px-5 py-4">
          <div className="rounded-lg bg-navy-700/50 p-3">
            <p className="text-xs font-semibold text-white">SIH Prototype</p>
            <p className="mt-0.5 flex items-center gap-1.5 text-[11px] text-navy-300">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              Demo Environment
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
