import { Cigarette, Smartphone } from 'lucide-react';
import type { Vice } from '../types/vice';

const icons: Record<string, React.ElementType> = {
  cigarette: Cigarette,
  smartphone: Smartphone,
};

interface ViceCardProps {
  vice: Vice;
}

export function ViceCard({ vice }: ViceCardProps) {
  const Icon = icons[vice.icon];
  const percent = Math.min((vice.currentStreak / vice.bestStreak) * 100, 100);

  return (
    <div className="bg-white rounded-2xl p-4 border border-anchor-100 mb-3">
      <div className="flex justify-between items-center mb-2.5">
        <div className="flex items-center gap-2">
          <Icon size={18} className="text-anchor-600" />
            <span className="text-[15px] font-medium">{vice.name}</span>
        </div>
            <span className="text-xs text-gray-500 font-mono">recorde {vice.bestStreak}d</span>
        </div>

      <div className="relative h-2 bg-anchor-100 rounded-full mb-1.5">
        <div
          className="absolute left-0 top-0 bottom-0 bg-resist-bar rounded-full"
          style={{ width: `${percent}%` }}
        />
      </div>
      <p className="text-xs text-gray-500 mb-3">
        maré atual: <span className="text-gray-800 font-medium font-mono">{vice.currentStreak} dias</span>
      </p>

      <div className="flex gap-2">
        <button className="flex-1 bg-resist-100 text-resist-600 rounded-lg py-2 text-xs font-medium">Resisti</button>
        <button className="flex-1 bg-partial-100 text-partial-600 rounded-lg py-2 text-xs font-medium">Parcial</button>
        <button className="flex-1 bg-relapse-100 text-relapse-600 rounded-lg py-2 text-xs font-medium">Recaí</button>
      </div>
    </div>
  );
}