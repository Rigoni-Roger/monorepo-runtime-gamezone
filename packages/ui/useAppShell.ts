import {create} from 'zustand'
import {persist} from 'zustand/middleware'

type Store = {
  user: string | null;
  score: number;
  setUser: (user: string | null) => void;
  addToScore: (amount: number) => void;
}

export const useAppShell = create(
  persist<Store>(
  (set) => ({
    user: null,
    score: 0,
    setUser: (user) => set((state) => ({...state, user})),
    addToScore: (amount) => set((state) => ({score: state.score + amount}))
  }), {
    name: "app-shell",
  }
)
)