import {
  ClipboardList,
  FileText,
  TriangleAlert,
  Brain,
  FileBarChart,
  Plus,
  Upload,
  MapPin,
  Info,
} from 'lucide-react';
import KpiCard from '@/components/KpiCard';
import DashboardHeader from '@/components/DashboardHeader';
import RiskDonutChart from '@/components/RiskDonutChart';
import TrendLineChart from '@/components/TrendLineChart';
import MineMap from '@/components/MineMap';
import GovernanceStrip from '@/components/GovernanceStrip';
import DataStatus from '@/components/DataStatus';
import { VisitBadge, EscalationBadge, RiskBadge, SeverityBadge, PriorityBadge } from '@/components/Badges';
import {
  KPIS,
  FIELD_VISITS,
  HIGH_RISK_MINES,
  ESCALATIONS,
} from '@/data/mockData';

const QUICK_ACTIONS = [
  { label: 'New Field Inspection', icon: Plus, tone: 'navy' as const },
  { label: 'Upload Document', icon: Upload, tone: 'light' as const },
  { label: 'Review Violations', icon: TriangleAlert, tone: 'light' as const },
  { label: 'View Risk Analysis', icon: Brain, tone: 'light' as const },
  { label: 'Create Report', icon: FileBarChart, tone: 'light' as const },
];

const toneClasses = {
  navy: 'border border-navy-700 bg-navy-700 text-white hover:bg-navy-800',
  light: 'border border-slate-200 bg-white text-navy-700 hover:border-navy-200 hover:bg-slate-50',
};

function riskScoreColor(score: number) {
  if (score >= 85) return 'bg-rose-500';
  if (score >= 80) return 'bg-orange-500';
  return 'bg-amber-500';
}

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <DashboardHeader />

      {/* KPI grid */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
        {KPIS.map((k) => (
          <KpiCard key={k.id} item={k} />
        ))}
      </div>

      {/* Risk overview + Trend */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <section className="card p-5 lg:col-span-1">
          <h2 className="section-title">Mine Risk Overview</h2>
          <p className="mt-1 text-xs text-slate-500">Distribution of mines by risk classification</p>
          <div className="mt-5">
            <RiskDonutChart />
          </div>
          <div className="mt-5 rounded-lg bg-slate-50 p-3 ring-1 ring-inset ring-slate-100">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">Risk Summary</span>
              <span className="text-xs text-slate-400">128 total</span>
            </div>
            <div className="mt-2 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-md bg-white p-2 ring-1 ring-slate-100">
                <p className="text-lg font-bold text-emerald-600">76</p>
                <p className="text-[11px] text-slate-500">Low</p>
              </div>
              <div className="rounded-md bg-white p-2 ring-1 ring-slate-100">
                <p className="text-lg font-bold text-amber-600">40</p>
                <p className="text-[11px] text-slate-500">Medium</p>
              </div>
              <div className="rounded-md bg-white p-2 ring-1 ring-slate-100">
                <p className="text-lg font-bold text-rose-600">12</p>
                <p className="text-[11px] text-slate-500">High</p>
              </div>
            </div>
          </div>
        </section>

        <section className="card p-5 lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="section-title">Safety &amp; Environmental Alerts</h2>
              <p className="mt-1 text-xs text-slate-500">Monthly trend of reported safety and environmental alerts.</p>
            </div>
            <span className="hidden rounded-md bg-amber-100 px-2 py-0.5 text-[11px] font-semibold text-amber-800 sm:inline-flex">
              Last 6 months
            </span>
          </div>
          <div className="mt-4">
            <TrendLineChart />
          </div>
        </section>
      </div>

      {/* Field visits + Quick actions */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <section className="card overflow-hidden lg:col-span-2">
          <div className="border-b border-slate-100 px-5 py-4">
            <div className="flex items-center justify-between">
              <h2 className="section-title">Recent Field Visits</h2>
              <ClipboardList className="h-4 w-4 text-slate-400" />
            </div>
            <p className="mt-1 text-xs text-slate-500">Latest geo-tagged inspection activity</p>
          </div>
          <div className="overflow-x-auto scrollbar-thin">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/60 text-xs uppercase tracking-wide text-slate-500">
                  <th className="px-5 py-3 font-medium">Mine Name</th>
                  <th className="px-5 py-3 font-medium">Inspector</th>
                  <th className="px-5 py-3 font-medium">Inspection Type</th>
                  <th className="px-5 py-3 font-medium">Date</th>
                  <th className="px-5 py-3 font-medium">Location</th>
                  <th className="px-5 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {FIELD_VISITS.map((v) => (
                  <tr key={`${v.mine}-${v.inspector}`} className="hover:bg-slate-50/50">
                    <td className="whitespace-nowrap px-5 py-3 font-medium text-navy-800">{v.mine}</td>
                    <td className="whitespace-nowrap px-5 py-3 text-slate-600">{v.inspector}</td>
                    <td className="whitespace-nowrap px-5 py-3 text-slate-600">{v.type}</td>
                    <td className="whitespace-nowrap px-5 py-3 text-slate-500">{v.date}</td>
                    <td className="whitespace-nowrap px-5 py-3 text-slate-500"><span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-navy-400" />{v.location}</span></td>
                    <td className="px-5 py-3"><VisitBadge status={v.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="card p-5">
          <h2 className="section-title">Quick Actions</h2>
          <p className="mt-1 text-xs text-slate-500">Common governance workflows</p>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2">
            {QUICK_ACTIONS.map((a) => {
              const Icon = a.icon;
              return (
                <button
                  key={a.label}
                  className={`flex min-h-[74px] flex-col items-start justify-between gap-2 rounded-lg p-3 text-left text-xs font-semibold leading-tight transition-colors ${toneClasses[a.tone]}`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  {a.label}
                </button>
              );
            })}
          </div>
        </section>
      </div>

      {/* High-risk mines + Map */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <section className="card overflow-hidden lg:col-span-2">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <h2 className="section-title">High-Risk Mines</h2>
            <span className="text-xs text-slate-400">Sorted by risk score</span>
          </div>
          <div className="overflow-x-auto scrollbar-thin">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/60 text-xs uppercase tracking-wide text-slate-500">
                  <th className="px-5 py-3 font-medium">Mine</th>
                  <th className="px-5 py-3 font-medium">State</th>
                  <th className="px-5 py-3 font-medium">Risk Score</th>
                  <th className="px-5 py-3 font-medium">Risk Level</th>
                  <th className="px-5 py-3 font-medium">Open Violations</th>
                  <th className="px-5 py-3 font-medium">Last Inspection</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {HIGH_RISK_MINES.map((m) => (
                  <tr key={m.mine} className="hover:bg-slate-50/50">
                    <td className="whitespace-nowrap px-5 py-3 font-medium text-navy-800">{m.mine}</td>
                    <td className="whitespace-nowrap px-5 py-3 text-slate-600">{m.state}</td>
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-16 overflow-hidden rounded-full bg-slate-100">
                          <div className={`h-full rounded-full ${riskScoreColor(m.riskScore)}`} style={{ width: `${m.riskScore}%` }} />
                        </div>
                        <span className="text-xs font-semibold text-navy-800 tabular-nums">{m.riskScore}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3"><RiskBadge level={m.riskLevel} /></td>
                    <td className="whitespace-nowrap px-5 py-3 text-slate-600 tabular-nums">{m.openViolations}</td>
                    <td className="whitespace-nowrap px-5 py-3 text-slate-500">{m.lastInspection}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="card p-5">
          <div className="flex items-center justify-between">
            <h2 className="section-title">Mine Risk Map</h2>
            <MapPin className="h-4 w-4 text-slate-400" />
          </div>
          <p className="mt-1 text-xs text-slate-500">Demo mine locations across coal belts</p>
          <div className="mt-4">
            <MineMap />
          </div>
        </section>
      </div>

      {/* Escalations */}
      <section className="card overflow-hidden">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <h2 className="section-title">Recent Escalations</h2>
          <span className="text-xs text-slate-400">Requires attention</span>
        </div>
        <div className="overflow-x-auto scrollbar-thin">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/60 text-xs uppercase tracking-wide text-slate-500">
                <th className="px-5 py-3 font-medium">Violation</th>
                <th className="px-5 py-3 font-medium">Mine</th>
                <th className="px-5 py-3 font-medium">Priority</th>
                <th className="px-5 py-3 font-medium">Severity</th>
                <th className="px-5 py-3 font-medium">Assigned To</th>
                <th className="px-5 py-3 font-medium">Deadline</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {ESCALATIONS.map((e) => (
                <tr key={`${e.violation}-${e.mine}`} className="hover:bg-slate-50/50">
                  <td className="whitespace-nowrap px-5 py-3 font-medium text-navy-800">{e.violation}</td>
                  <td className="whitespace-nowrap px-5 py-3 text-slate-600">{e.mine}</td>
                  <td className="px-5 py-3"><PriorityBadge priority={e.priority} /></td>
                  <td className="px-5 py-3"><SeverityBadge severity={e.severity} /></td>
                  <td className="whitespace-nowrap px-5 py-3 text-slate-600">{e.assignedTo}</td>
                  <td className={`whitespace-nowrap px-5 py-3 font-medium ${e.overdue ? 'text-rose-700' : 'text-slate-500'}`}>
                    <span className="inline-flex items-center gap-1.5">{e.overdue && <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />}{e.deadline}{e.overdue && <span className="text-[10px] font-bold uppercase">Overdue</span>}</span>
                  </td>
                  <td className="px-5 py-3"><EscalationBadge status={e.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Demo mode banner */}
      <div className="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
        <Info className="mt-0.5 h-4 w-4 shrink-0" />
        <p>
          <span className="font-semibold">DEMO MODE</span> — Data shown in this prototype is simulated and will be
          replaced by verified government datasets during implementation.
        </p>
      </div>

      {/* Governance monitoring strip */}
      <GovernanceStrip />

      {/* Data status */}
      <DataStatus />
    </div>
  );
}
