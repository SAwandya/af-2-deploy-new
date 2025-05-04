import { create } from "zustand";

const useCountryFilterStore = create((set) => ({
  search: "",
  region: "",
  language: "",
  setSearch: (search) => set({ search }),
  setRegion: (region) => set({ region }),
  setLanguage: (language) => set({ language }),
}));

export default useCountryFilterStore;
