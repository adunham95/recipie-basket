import { create } from 'zustand';
import { IBaseStore } from './baseStore';

export interface IToast {
  id: number;
  title: string;
  subTitle?: string;
  style?: 'danger' | 'success' | 'warning' | 'info';
}

interface IToastSlice extends IBaseStore {
  toasts: Array<IToast>;
  addToast: (
    title: string,
    style?: 'danger' | 'success' | 'warning' | 'info',
    subTitle?: string,
  ) => void;
  removeToast: (id: number) => void;
}

export const useToast = create<IToastSlice>((set, get) => ({
  toasts: [],
  addToast: (title, style = 'info', subTitle) => {
    set((state) => ({
      toasts: [...state.toasts, { id: Date.now(), title, subTitle, style }],
    }));
  },
  removeToast: (id) => {
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    }));
  },
  clear: () =>
    set({
      toasts: [],
    }),
}));
