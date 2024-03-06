
import { create } from 'zustand'

const useStore = create((set) => ({
  search: '',
  btn:0,
  
  startSearch: () => set((state) => ({ search: state.search  })),
//   removeAllBears: () => set({ bears: 0 }),
  updatesearch: (newSearch) => set({ search: newSearch }),
  increasePopulation: () => set((state) => ({ btn: state.btn + 1 }))
}))
export default useStore
