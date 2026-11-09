// types/checkin.ts
export type CheckInAction = 'resisti' | 'parcial' | 'recai';

export interface CheckIn {
  id: string;
  viceId: string;
  action: CheckInAction;
  feeling?: string;
  note?: string;
  createdAt: string; // ISO
}