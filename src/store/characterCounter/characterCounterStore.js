import create from "zustand";

export const useCharacterCounterStore = create((set, get) => ({
  inputText: "",
  setText: (newValue) => set((state) => ({ inputText: newValue })),
  charactersCounter: () => {
    return get().inputText.length;
  },
}));
