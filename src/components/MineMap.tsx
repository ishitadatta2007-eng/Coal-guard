import { useEffect } from 'react';
import { CircleMarker, MapContainer, Popup, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { MAP_MARKERS } from '@/data/mockData';
import type { RiskLevel } from '@/types';

const RISK_COLOR: Record<RiskLevel, string> = {
  Low: '#16a34a',
  Medium: '#ea8a05',
  High: '#dc2626',
};

function MapResizeHandler() {
  const map = useMap();
  useEffect(() => {
    const timer = window.setTimeout(() => map.invalidateSize(), 100);
    return () => window.clearTimeout(timer);
  }, [map]);
  return null;
}

export default function MineMap() {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
      <div className="relative h-[300px] w-full sm:h-[340px]">
        <MapContainer
          center={[22.8, 84.2]}
          zoom={6}
          minZoom={5}
          maxZoom={10}
          scrollWheelZoom={false}
          className="h-full w-full"
          aria-label="Interactive demo mine risk map"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapResizeHandler />
          {MAP_MARKERS.map((mine) => (
            <CircleMarker
              key={mine.name}
              center={[mine.lat, mine.lng]}
              radius={9}
              pathOptions={{
                color: '#ffffff',
                weight: 2,
                fillColor: RISK_COLOR[mine.risk],
                fillOpacity: 0.9,
              }}
            >
              <Popup>
                <div className="min-w-[190px] text-[12px] text-slate-700">
                  <p className="mb-2 border-b border-slate-200 pb-1.5 text-sm font-bold text-navy-900">{mine.name}</p>
                  <dl className="space-y-1">
                    <div className="flex justify-between gap-4"><dt>State</dt><dd className="font-medium">{mine.state}</dd></div>
                    <div className="flex justify-between gap-4"><dt>Risk Score</dt><dd className="font-medium">{mine.riskScore}</dd></div>
                    <div className="flex justify-between gap-4"><dt>Risk Level</dt><dd className="font-semibold" style={{ color: RISK_COLOR[mine.risk] }}>{mine.risk} Risk</dd></div>
                    <div className="flex justify-between gap-4"><dt>Open Violations</dt><dd className="font-medium">{mine.openViolations}</dd></div>
                    <div className="flex justify-between gap-4"><dt>Last Inspection</dt><dd className="font-medium">{mine.lastInspection}</dd></div>
                  </dl>
                </div>
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
        <div className="pointer-events-none absolute left-2 top-2 z-[400] rounded-md border border-amber-300 bg-amber-50/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-amber-800 shadow-sm">
          Demo Mine Locations
        </div>
        <div className="pointer-events-none absolute bottom-2 left-2 z-[400] rounded-md bg-white/95 px-2.5 py-1.5 text-[10px] font-medium text-slate-600 shadow-sm ring-1 ring-slate-200">
          <span className="mr-2"><span className="mr-1 inline-block h-2 w-2 rounded-full bg-green-600" />Low</span>
          <span className="mr-2"><span className="mr-1 inline-block h-2 w-2 rounded-full bg-orange-500" />Medium</span>
          <span><span className="mr-1 inline-block h-2 w-2 rounded-full bg-red-600" />High</span>
        </div>
      </div>
      <p className="border-t border-slate-200 bg-white px-3 py-2 text-[11px] text-slate-500">
        Approximate demo locations — not official mine boundaries.
      </p>
    </div>
  );
}
