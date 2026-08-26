import type { LucideIcon } from 'lucide-react';
import { Construction } from 'lucide-react';

export interface PageMeta {
  title: string;
  description: string;
  phase: string;
  icon: LucideIcon;
}

export default function PagePlaceholder({ meta }: { meta: PageMeta }) {
  const Icon = meta.icon ?? Construction;
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="card max-w-lg p-8 text-center sm:p-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-navy-50 text-navy-600 ring-1 ring-inset ring-navy-100">
          <Icon className="h-7 w-7" />
        </div>
        <h2 className="mt-5 text-xl font-bold text-navy-900">{meta.title}</h2>
        <p className="mt-2 text-sm text-slate-500">{meta.description}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 rounded-md bg-amber-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-amber-800 ring-1 ring-inset ring-amber-200">
          {meta.phase}
        </span>
      </div>
    </div>
  );
}
