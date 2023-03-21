type Store = {
    user: string | null;
    score: number;
    setUser: (user: string | null) => void;
    addToScore: (amount: number) => void;
};
export declare const useAppShell: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<Store>, "persist"> & {
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<Store, Store>>) => void;
        clearStorage: () => void;
        rehydrate: () => void | Promise<void>;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: Store) => void) => () => void;
        onFinishHydration: (fn: (state: Store) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<Store, Store>>;
    };
}>;
export {};
//# sourceMappingURL=useAppShell.d.ts.map