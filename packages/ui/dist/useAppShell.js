import { create } from 'zustand';
import { persist } from 'zustand/middleware';
export const useAppShell = create(persist((set) => ({
    user: null,
    score: 0,
    setUser: (user) => set((state) => (Object.assign(Object.assign({}, state), { user }))),
    addToScore: (amount) => set((state) => ({ score: state.score + amount }))
}), {
    name: "app-shell",
}));
