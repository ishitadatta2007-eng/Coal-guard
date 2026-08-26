export type RiskLevel = 'Low' | 'Medium' | 'High';

export type VisitStatus = 'Completed' | 'Pending Review' | 'Action Required';

export type EscalationStatus = 'Open' | 'Under Review' | 'Escalated' | 'Resolved';

export type Severity = 'High' | 'Medium' | 'Low';

export interface KpiItem {
  id: string;
  title: string;
  value: number;
  context: string;
  icon: string;
  accent: 'navy' | 'accent' | 'amber' | 'rose' | 'sky';
}

export interface FieldVisit {
  mine: string;
  inspector: string;
  type: string;
  date: string;
  location: string;
  status: VisitStatus;
}

export interface HighRiskMine {
  mine: string;
  state: string;
  riskScore: number;
  riskLevel: RiskLevel;
  openViolations: number;
  lastInspection: string;
}

export interface Escalation {
  violation: string;
  mine: string;
  severity: Severity;
  priority: 'High' | 'Medium' | 'Low';
  assignedTo: string;
  deadline: string;
  overdue: boolean;
  status: EscalationStatus;
}

export interface MapMarker {
  name: string;
  state: string;
  risk: RiskLevel;
  riskScore: number;
  openViolations: number;
  lastInspection: string;
  lat: number;
  lng: number;
}

export interface TrendPoint {
  month: string;
  safety: number;
  environmental: number;
}
