// components/PanicMode.tsx
import { useEffect, useState } from 'react';
import { Phone, X } from 'lucide-react';

const PHRASES = [
  'Isso vai passar. A vontade é uma onda, e ondas quebram.',
  'Você não precisa decidir nada agora, só respirar.',
  'Você já chegou até aqui. Isso conta.',
];

const FRIEND_KEY = 'ancora:friend';

interface Friend { name: string; phone: string }

export function PanicMode({ onClose }: { onClose: () => void }) {
  const [t, setT] = useState(0);
  const [ready, setReady] = useState(false);
  const [friend, setFriend] = useState<Friend | null>(() => {
    try {
      return JSON.parse(localStorage.getItem(FRIEND_KEY) ?? 'null');
    } catch {
      return null;
    }
  });

  // Ciclo 4-7-8
  useEffect(() => {
    const id = setInterval(() => setT((x) => x + 1), 1000);
    const ready = setTimeout(() => setReady(true), 50);
    return () => { clearInterval(id); clearTimeout(ready); };
  }, []);

  // Esc fecha
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const pos = t % 19;
  const phase = pos < 4 ? 0 : pos < 11 ? 1 : 2;
  const remaining = phase === 0 ? 4 - pos : phase === 1 ? 11 - pos : 19 - pos;
  const label = ['Inspire', 'Segure', 'Solte'][phase];
  const duration = [4, 7, 8][phase];
  const scale = phase === 2 || !ready ? 0.55 : 1;
  const phrase = PHRASES[Math.floor(t / 19) % PHRASES.length];

  const saveFriend = () => {
    const name = window.prompt('Nome do amigo:');
    const phone = name && window.prompt('Telefone (com DDD):');
    if (name && phone) {
      const f = { name, phone: phone.replace(/\D/g, '') };
      localStorage.setItem(FRIEND_KEY, JSON.stringify(f));
      setFriend(f);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-ink text-white flex flex-col items-center justify-between p-8">
      <button
        onClick={onClose}
        aria-label="Fechar"
        className="self-end text-white/60 hover:text-white"
      >
        <X size={22} />
      </button>

      <div className="flex flex-col items-center gap-8">
        <p className="font-display text-xl text-center max-w-md text-white/90">{phrase}</p>

        <div className="relative w-64 h-64 flex items-center justify-center">
          <div
            className="absolute inset-0 rounded-full bg-resist-bar/30 border border-resist-bar"
            style={{
              transform: `scale(${scale})`,
              transition: `transform ${duration}s ease-in-out`,
            }}
          />
          <div className="relative text-center">
            <p className="font-display text-2xl font-semibold">{label}</p>
            <p className="font-mono text-4xl mt-1">{remaining}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
        <a
          href="tel:188"
          className="flex-1 flex items-center justify-center gap-2 py-4 rounded-full bg-white text-ink font-medium text-base"
        >
          <Phone size={18} /> Ligar para o CVV (188)
        </a>
        {friend ? (
          <a
            href={`tel:${friend.phone}`}
            className="flex-1 flex items-center justify-center gap-2 py-4 rounded-full border border-white/40 text-white text-sm"
          >
            <Phone size={16} /> Ligar para {friend.name}
          </a>
        ) : (
          <button
            onClick={saveFriend}
            className="flex-1 py-4 rounded-full border border-white/40 text-white/80 text-sm"
          >
            + Adicionar um amigo
          </button>
        )}
      </div>
    </div>
  );
}