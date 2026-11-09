// hooks/useCheckIns.ts
import { useEffect, useState } from 'react';
import type { CheckIn } from '../types/checkin';

const KEY = 'ancora:checkins';

export function useCheckIns() {
  const [checkIns, setCheckIns] = useState<CheckIn[]>(() => {
    try {
      return JSON.parse(localStorage.getItem(KEY) ?? '[]');
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(checkIns));
  }, [checkIns]);

  const add = (data: Omit<CheckIn, 'id' | 'createdAt'>) =>
    setCheckIns((prev) => [
      { ...data, id: crypto.randomUUID(), createdAt: new Date().toISOString() },
      ...prev,
    ]);

  return { checkIns, add };
}