import { create } from 'zustand'

interface UserStore {
  auth: boolean
  setAuth: (auth: boolean) => void
}

export const useUserStore = create<UserStore>()((set) => ({
  auth: false,
  setAuth: (auth: boolean) => set({auth})
}))