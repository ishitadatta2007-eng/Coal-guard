import type { VisitStatus, EscalationStatus, RiskLevel, Severity } from '@/types';

const visitStyles: Record<VisitStatus, string> = {
  Completed: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
  'Pending Review': 'bg-amber-50 text-amber-700 ring-amber-600/20',
  'Action Required': 'bg-rose-50 text-rose-700 ring-rose-600/20',
};

const escalationStyles: Record<EscalationStatus, string> = {
  Open: 'bg-rose-50 text-rose-700 ring-rose-600/20',
  'Under Review': 'bg-amber-50 text-amber-700 ring-amber-600/20',
  Escalated: 'bg-orange-50 text-orange-700 ring-orange-600/20',
  Resolved: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
};

const riskStyles: Record<RiskLevel, string> = {
  Low: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
  Medium: 'bg-amber-50 text-amber-700 ring-amber-600/20',
  High: 'bg-rose-50 text-rose-700 ring-rose-600/20',
};

const severityStyles: Record<Severity, string> = {
  High: 'bg-rose-50 text-rose-700 ring-rose-600/20',
  Medium: 'bg-amber-50 text-amber-700 ring-amber-600/20',
  Low: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
};

export function VisitBadge({ status }: { status: VisitStatus }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${visitStyles[status]}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
      {status}
    </span>
  );
}

export function EscalationBadge({ status }: { status: EscalationStatus }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${escalationStyles[status]}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
      {status}
    </span>
  );
}

export function RiskBadge({ level }: { level: RiskLevel }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${riskStyles[level]}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
      {level} Risk
    </span>
  );
}

export function SeverityBadge({ severity }: { severity: Severity }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${severityStyles[severity]}`}>
      {severity}
    </span>
  );
}

export function PriorityBadge({ priority }: { priority: Severity }) {
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${severityStyles[priority].split(' ').find((value) => value.startsWith('text-')) ?? 'text-slate-600'}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${priority === 'High' ? 'bg-rose-500' : priority === 'Medium' ? 'bg-amber-500' : 'bg-emerald-500'}`} />
      {priority}
    </span>
  );
}
