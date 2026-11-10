// components/ViceCard.tsx
import { Cigarette, Smartphone } from 'lucide-react';
import type { Vice } from '../types/vice';
import type { CheckInAction } from '../types/checkin';

const icons: Record<string, React.ElementType> = {
  cigarette: Cigarette,
  smartphone: Smartphone,
};

const WAVE_PATH =
  'M0,12 C20,4 40,20 60,12 C80,4 100,20 120,12 C140,4 160,20 180,12 C200,4 220,20 240,12 C260,4 280,20 300,12 C320,4 340,20 360,12 C380,4 400,20 400,12';

function TideBar({ percent }: { percent: number }) {
  return (
    <div className="relative h-3 w-full">
      <svg
        className="absolute inset-0 w-full h-full text-anchor-100"
        viewBox="0 0 400 24"
        preserveAspectRatio="none"
      >
        <path d={WAVE_PATH} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <svg
        className="absolute inset-0 w-full h-full text-resist-bar transition-[clip-path] duration-500 ease-out"
        viewBox="0 0 400 24"
        preserveAspectRatio="none"
        style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}
      >
        <path d={WAVE_PATH} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

interface ViceCardProps {
  vice: Vice;
  onAction: (action: CheckInAction) => void;
}

export function ViceCard({ vice, onAction }: ViceCardProps) {
  const Icon = icons[vice.icon];
  const percent = Math.min((vice.currentStreak / vice.bestStreak) * 100, 100);

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-5 bg-white rounded-2xl p-4 md:p-5 border border-anchor-100">
      {/* ícone + nome */}
      <div className="flex items-center gap-3 w-full md:w-40 md:shrink-0 min-w-0">
        <div className="w-9 h-9 rounded-full bg-anchor-50 flex items-center justify-center shrink-0">
          <Icon size={17} className="text-anchor-600" />
        </div>
        <div className="min-w-0">
          <p className="text-[15px] font-medium text-ink truncate">{vice.name}</p>
          <p className="text-[11px] text-gray-500 font-mono">recorde {vice.bestStreak}d</p>
        </div>
      </div>

      {/* maré */}
      <div className="w-full md:flex-1 md:min-w-[140px]">
        <TideBar percent={percent} />
        <p className="text-xs text-gray-500 mt-2.5">
          maré atual:{' '}
          <span className="text-gray-800 font-medium font-mono">{vice.currentStreak} dias</span>
        </p>
      </div>

      {/* botões: 3 colunas iguais no celular */}
      <div className="grid grid-cols-3 md:flex gap-2 w-full md:w-auto md:shrink-0">
        <button
          onClick={() => onAction('resisti')}
          className="bg-resist-100 text-resist-600 rounded-lg px-3.5 py-2.5 md:py-2 text-xs font-medium hover:brightness-95 transition"
        >
          Resisti
        </button>
        <button
          onClick={() => onAction('parcial')}
          className="bg-partial-100 text-partial-600 rounded-lg px-3.5 py-2.5 md:py-2 text-xs font-medium hover:brightness-95 transition"
        >
          Parcial
        </button>
        <button
          onClick={() => onAction('recai')}
          className="bg-relapse-100 text-relapse-600 rounded-lg px-3.5 py-2.5 md:py-2 text-xs font-medium hover:brightness-95 transition"
        >
          Recaí
        </button>
      </div>
    </div>
  );
}