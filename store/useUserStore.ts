import {create} from 'zustand';

interface Profile {
  name: string;
  email: string;
}

interface UserState {
  profile: Profile | null;
  isAuthenticated: boolean;
  login: (profile: Profile) => void;
  logout: () => void;
  updateProfile: (profile: Profile) => void;
}

export const useUserStore = create<UserState>((set) => ({
  profile: null,
  isAuthenticated: false,
  login: (profile) =>
    set({
      profile,
      isAuthenticated: true,
    }),
  logout: () =>
    set({
      profile: null,
      isAuthenticated: false,
    }),
  updateProfile: (profile) =>
    set((state) => ({
      profile: state.isAuthenticated ? profile : null,
    })),
}));
