import { useState } from 'react';
import {
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
} from 'lucide-react';
import Sidebar, { type PageId } from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import Dashboard from '@/pages/Dashboard';
import Footer from '@/components/Footer';
import PagePlaceholder, { type PageMeta } from '@/components/PagePlaceholder';

const PAGE_META: Record<Exclude<PageId, 'dashboard'>, PageMeta> = {
  mines: {
    title: 'Mines Registry',
    description: 'A complete registry of monitored coal mines with operational metadata, lease status, and compliance history will be available in Phase 2.',
    phase: 'Phase 2',
    icon: Pickaxe,
  },
  inspections: {
    title: 'Field Inspections',
    description: 'Geo-tagged offline field inspection functionality with photo evidence and timestamped submissions will be implemented in Phase 2.',
    phase: 'Phase 2',
    icon: ClipboardList,
  },
  safety: {
    title: 'Safety Compliance',
    description: 'Statutory safety compliance tracking against mine safety regulations, including PPE, ventilation, and fire safety audits, will be available in Phase 3.',
    phase: 'Phase 3',
    icon: HardHat,
  },
  environment: {
    title: 'Environmental Compliance',
    description: 'Environmental monitoring against statutory norms — air, water, dust, and land reclamation compliance — will be available in Phase 3.',
    phase: 'Phase 3',
    icon: Leaf,
  },
  violations: {
    title: 'Regulatory Violations',
    description: 'A consolidated registry of statutory violations with severity, penalty status, and remediation tracking will be available in Phase 3.',
    phase: 'Phase 3',
    icon: Scale,
  },
  risk: {
    title: 'Risk Intelligence',
    description: 'AI-powered predictive risk analysis with explainable risk scores will be available in Phase 3.',
    phase: 'Phase 3',
    icon: Brain,
  },
  documents: {
    title: 'Documents & OCR',
    description: 'OCR-based regulatory document digitization and structured extraction will be available in Phase 3.',
    phase: 'Phase 3',
    icon: FileText,
  },
  escalations: {
    title: 'Escalations',
    description: 'Automatic escalation workflows with multi-tier routing and deadline tracking will be available in Phase 3.',
    phase: 'Phase 3',
    icon: ArrowUpRight,
  },
  reports: {
    title: 'Reports',
    description: 'Scheduled governance reports and exportable analytics across mines, states, and timeframes will be available in Phase 4.',
    phase: 'Phase 4',
    icon: FileBarChart,
  },
  settings: {
    title: 'Settings',
    description: 'User roles, notification preferences, and integration settings will be configured here in later phases.',
    phase: 'Phase 4',
    icon: Settings,
  },
};

export default function App() {
  const [page, setPage] = useState<PageId>('dashboard');
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100">
      <Sidebar
        active={page}
        onNavigate={setPage}
        mobileOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
      <div className="lg:pl-64">
        <TopBar onMenuClick={() => setMobileOpen(true)} />
        <main className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
          {page === 'dashboard' ? <Dashboard /> : <PagePlaceholder meta={PAGE_META[page]} />}
        </main>
        <Footer />
      </div>
    </div>
  );
}
