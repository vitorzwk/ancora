// pages/Dashboard.tsx
import { useState } from 'react';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockVices } from '../data/mockVices';
import { ViceCard } from '../components/ViceCard';
import { CheckInModal } from '../components/CheckInModal';
import { PanicMode } from '../components/PanicMode';
import { useCheckIns } from '../hooks/useCheckIns';
import type { CheckInAction } from '../types/checkin';

interface PendingCheckIn {
  viceId: string;
  viceName: string;
  action: CheckInAction;
}

export function Dashboard() {
  const totalDays = mockVices.reduce((acc, v) => acc + v.currentStreak, 0);
  const { add } = useCheckIns();
  const [panicOpen, setPanicOpen] = useState(false);
  const [pending, setPending] = useState<PendingCheckIn | null>(null);
  const hoje = new Date().toLocaleDateString('pt-BR', {day: 'numeric',month: 'long',}); 
  return (
    <div className="min-h-screen bg-paper text-ink font-sans overflow-x-hidden">
      <header className="flex justify-between items-center px-4 sm:px-7 py-3.5 border-b border-anchor-100">
        <span className="font-display font-semibold text-[15px] text-ink">
          / âncora <span className="font-mono font-normal text-[11px] text-gray-500">v0.1</span>
        </span>
        <nav className="flex gap-4 sm:gap-5 items-center">
          <Link to="/app" className="text-xs font-medium text-ink">painel</Link>
          <Link to="/sobre" className="text-xs text-gray-500 hover:text-ink transition-colors">sobre</Link>
          <span className="hidden sm:block w-px h-4 bg-anchor-100" />
          <span className="hidden sm:inline font-mono text-[11px] text-gray-500">
          {hoje}
          </span>
        </nav>
      </header>

      <section className="max-w-6xl mx-auto px-4 sm:px-7 py-8 sm:py-12">
        <div className="flex items-end justify-between gap-4 sm:gap-6 flex-wrap mb-8 sm:mb-10">
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 mb-3">
              <span className="w-1.5 h-1.5 bg-resist-bar inline-block" />
              <span className="font-mono text-[11px] tracking-wide text-gray-500">SEU PAINEL</span>
            </div>
            <h1 className="font-display font-semibold text-2xl sm:text-3xl text-ink">
              Cada dia é uma escolha, não um placar.
            </h1>
          </div>
          <button
            onClick={() => setPanicOpen(true)}
            className="w-full sm:w-auto justify-center shrink-0 border border-relapse-bar text-relapse-600 rounded-full px-4 py-2.5 sm:py-2 text-xs font-medium flex items-center gap-1.5 hover:bg-relapse-100 transition-colors"
          >
            <Phone size={14} />
            Preciso de ajuda agora
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-6">
          <div className="space-y-4 min-w-0">
            {mockVices.map((vice) => (
              <ViceCard
                key={vice.id}
                vice={vice}
                onAction={(action: CheckInAction) =>
                  setPending({ viceId: vice.id, viceName: vice.name, action })
                }
              />
            ))}
          </div>

          <aside className="space-y-4 min-w-0">
            <div className="bg-white rounded-2xl p-5 border border-anchor-100">
              <span className="font-mono text-[11px] tracking-wide text-gray-500">RESUMO</span>
              <p className="font-display text-2xl font-semibold text-ink mt-2">{totalDays} dias</p>
              <p className="text-xs text-gray-500 mt-1">somados entre todas as marés ativas</p>
            </div>
            <div className="bg-anchor-50 rounded-2xl p-5 border border-anchor-100">
              <p className="text-[13px] text-gray-600 leading-relaxed">
                Recaída não apaga o que veio antes. Registre, respire, e volte pra âncora amanhã.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {pending && (
        <CheckInModal
          action={pending.action}
          viceName={pending.viceName}
          onSkip={() => {
            add({ viceId: pending.viceId, action: pending.action });
            setPending(null);
          }}
          onSave={(data) => {
            add({ viceId: pending.viceId, action: pending.action, ...data });
            setPending(null);
          }}
        />
      )}

      {panicOpen && <PanicMode onClose={() => setPanicOpen(false)} />}
    </div>
  );
}