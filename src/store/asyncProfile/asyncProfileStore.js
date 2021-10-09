import create from "zustand";
import { devtools } from "zustand/middleware";

export const useAsyncProfileStore = create(
  devtools((set, get) => ({
    profile: null,
    profileGender: "",
    queryProfile: async () => {
      const response = await fetch(
        `https://randomuser.me/api/?gender=${get().profileGender}`
      );
      if (response.error) {
        throw response.error;
      }
      const json = await response.json();
      set({ profile: json.results[0] });
    },
    clearProfile: () => set({ profile: null }),
  }))
);
