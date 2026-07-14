import { Phone } from 'lucide-react';
import { mockVices } from '../data/mockVices';
import { ViceCard } from '../components/ViceCard';

export function Dashboard() {
  return (
    <div className="max-w-sm mx-auto bg-anchor-50 min-h-screen p-4">
      <div className="flex justify-between items-baseline mb-4">
        <h1 className="font-display text-xl font-medium text-anchor-600">Âncora</h1>
        <span className="text-xs text-gray-500">12 de julho</span>
      </div>

      {mockVices.map((vice) => (
        <ViceCard key={vice.id} vice={vice} />
      ))}

      <button className="w-full border border-relapse-bar text-relapse-600 rounded-xl py-2.5 text-sm font-medium flex items-center justify-center gap-1.5">
        <Phone size={16} />
        Preciso de ajuda agora
      </button>
    </div>
  );
}