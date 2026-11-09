// components/CheckInModal.tsx
import { useState } from 'react';
import type { CheckInAction } from '../types/checkin';

const COPY: Record<CheckInAction, { title: string; placeholder: string; feelings: string[] }> = {
  resisti: {
    title: 'O que te ajudou a resistir?',
    placeholder: 'Ex: saí para caminhar, bebi água...',
    feelings: ['Calmo', 'Orgulhoso', 'Ansioso', 'Cansado'],
  },
  parcial: {
    title: 'O que aconteceu hoje?',
    placeholder: 'Ex: fiz só um, mas parei...',
    feelings: ['Em conflito', 'Ansioso', 'Cansado', 'Esperançoso'],
  },
  recai: {
    title: 'O que veio antes? (gatilho)',
    placeholder: 'Ex: estresse no trabalho, tédio, festa...',
    feelings: ['Culpa', 'Estresse', 'Tédio', 'Triste'],
  },
};

interface Props {
  action: CheckInAction;
  viceName: string;
  onSave: (data: { feeling?: string; note?: string }) => void;
  onSkip: () => void;
}

export function CheckInModal({ action, viceName, onSave, onSkip }: Props) {
  const [feeling, setFeeling] = useState<string>();
  const [note, setNote] = useState('');
  const copy = COPY[action];

  return (
    <div
      className="fixed inset-0 z-40 bg-ink/40 flex items-center justify-center p-4"
      onClick={onSkip}
    >
      <div
        role="dialog"
        aria-modal="true"
        className="bg-white rounded-2xl border border-anchor-100 p-6 w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="font-mono text-[11px] tracking-wide text-gray-500">
          {viceName.toUpperCase()}
        </span>
        <h2 className="font-display font-semibold text-xl text-ink mt-1">{copy.title}</h2>

        <div className="flex flex-wrap gap-2 mt-4">
          {copy.feelings.map((f) => (
            <button
              key={f}
              onClick={() => setFeeling(f === feeling ? undefined : f)}
              className={`px-3 py-1.5 rounded-full text-xs border transition-colors ${
                feeling === f
                  ? 'bg-anchor-100 border-anchor-100 text-ink font-medium'
                  : 'border-anchor-100 text-gray-600 hover:bg-anchor-50'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder={copy.placeholder}
          rows={3}
          className="w-full mt-4 rounded-xl border border-anchor-100 p-3 text-sm resize-none focus:outline-none focus:border-resist-bar"
        />

        <div className="flex justify-end gap-2 mt-4">
          <button onClick={onSkip} className="px-4 py-2 text-xs text-gray-500 hover:text-ink">
            Pular
          </button>
          <button
            onClick={() => onSave({ feeling, note: note.trim() || undefined })}
            className="px-4 py-2 text-xs font-medium rounded-full bg-ink text-white"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}