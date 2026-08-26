import type {
  KpiItem,
  FieldVisit,
  HighRiskMine,
  Escalation,
  MapMarker,
  TrendPoint,
} from '@/types';

export const KPIS: KpiItem[] = [
  { id: 'mines', title: 'Total Mines', value: 128, context: 'Under active regulatory monitoring', icon: 'Pickaxe', accent: 'navy' },
  { id: 'insp-done', title: 'Inspections Completed', value: 342, context: 'Recorded this fiscal year', icon: 'ClipboardCheck', accent: 'accent' },
  { id: 'insp-pending', title: 'Pending Inspections', value: 27, context: '8 due this week', icon: 'Clock', accent: 'amber' },
  { id: 'violations', title: 'Regulatory Violations', value: 64, context: 'Open across 41 mines', icon: 'TriangleAlert', accent: 'rose' },
  { id: 'high-risk', title: 'High-Risk Mines', value: 12, context: '9.4% of monitored mines', icon: 'Siren', accent: 'rose' },
  { id: 'env-alerts', title: 'Environmental Alerts', value: 31, context: 'Require officer review', icon: 'Leaf', accent: 'sky' },
  { id: 'safety-alerts', title: 'Safety Alerts', value: 18, context: 'Flagged for follow-up', icon: 'ShieldCheck', accent: 'navy' },
  { id: 'escalations', title: 'Open Escalations', value: 14, context: '5 overdue', icon: 'ArrowUpRight', accent: 'amber' },
];

export const RISK_DISTRIBUTION = [
  { level: 'Low', count: 76, color: '#10d26c' },
  { level: 'Medium', count: 40, color: '#f59e0b' },
  { level: 'High', count: 12, color: '#e11d48' },
];

export const TREND_DATA: TrendPoint[] = [
  { month: 'March', safety: 22, environmental: 28 },
  { month: 'April', safety: 19, environmental: 33 },
  { month: 'May', safety: 24, environmental: 26 },
  { month: 'June', safety: 16, environmental: 35 },
  { month: 'July', safety: 20, environmental: 29 },
  { month: 'August', safety: 18, environmental: 31 },
];

export const FIELD_VISITS: FieldVisit[] = [
  { mine: 'Gevra OC Mine', inspector: 'Ankit Kumar', type: 'Safety Inspection', date: '24 Aug 2026', location: 'Chhattisgarh', status: 'Completed' },
  { mine: 'Korba Mine', inspector: 'Rahul Singh', type: 'Environmental Inspection', date: '24 Aug 2026', location: 'Chhattisgarh', status: 'Completed' },
  { mine: 'Talcher Mine', inspector: 'S. Das', type: 'Compliance Inspection', date: '23 Aug 2026', location: 'Odisha', status: 'Pending Review' },
  { mine: 'Singrauli Mine', inspector: 'Priya Sharma', type: 'Safety Inspection', date: '23 Aug 2026', location: 'Madhya Pradesh', status: 'Completed' },
  { mine: 'Bokaro Mine', inspector: 'Amit Das', type: 'Environmental Inspection', date: '22 Aug 2026', location: 'Jharkhand', status: 'Action Required' },
];

export const HIGH_RISK_MINES: HighRiskMine[] = [
  { mine: 'Gevra OC Mine', state: 'Chhattisgarh', riskScore: 87, riskLevel: 'High', openViolations: 6, lastInspection: '24 Aug 2026' },
  { mine: 'Korba Mine', state: 'Chhattisgarh', riskScore: 82, riskLevel: 'High', openViolations: 4, lastInspection: '23 Aug 2026' },
  { mine: 'Singrauli Mine', state: 'Madhya Pradesh', riskScore: 79, riskLevel: 'High', openViolations: 5, lastInspection: '22 Aug 2026' },
  { mine: 'Talcher Mine', state: 'Odisha', riskScore: 75, riskLevel: 'High', openViolations: 3, lastInspection: '21 Aug 2026' },
];

export const ESCALATIONS: Escalation[] = [
  { violation: 'Fire Safety Inspection Overdue', mine: 'Gevra OC Mine', severity: 'High', priority: 'High', assignedTo: 'Mine Safety Officer', deadline: '24 Aug 2026', overdue: true, status: 'Open' },
  { violation: 'Environmental Compliance Issue', mine: 'Korba Mine', severity: 'Medium', priority: 'Medium', assignedTo: 'Environmental Officer', deadline: '28 Aug 2026', overdue: false, status: 'Under Review' },
  { violation: 'Repeated PPE Violation', mine: 'Talcher Mine', severity: 'High', priority: 'High', assignedTo: 'Safety Officer', deadline: '25 Aug 2026', overdue: false, status: 'Escalated' },
];

export const MAP_MARKERS: MapMarker[] = [
  { name: 'Gevra OC Mine', state: 'Chhattisgarh', risk: 'High', riskScore: 87, openViolations: 6, lastInspection: '24 Aug 2026', lat: 22.3, lng: 82.55 },
  { name: 'Korba Mine', state: 'Chhattisgarh', risk: 'High', riskScore: 82, openViolations: 4, lastInspection: '23 Aug 2026', lat: 22.36, lng: 82.75 },
  { name: 'Singrauli Mine', state: 'Madhya Pradesh', risk: 'High', riskScore: 79, openViolations: 5, lastInspection: '22 Aug 2026', lat: 24.12, lng: 82.66 },
  { name: 'Talcher Mine', state: 'Odisha', risk: 'High', riskScore: 75, openViolations: 3, lastInspection: '21 Aug 2026', lat: 20.95, lng: 85.2 },
  { name: 'Bokaro Mine', state: 'Jharkhand', risk: 'Medium', riskScore: 64, openViolations: 2, lastInspection: '20 Aug 2026', lat: 23.79, lng: 86.0 },
];
