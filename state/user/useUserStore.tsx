import create from "zustand";
import produce from "immer";
import { devtools } from "zustand/middleware";

export type Tabs = "modules" | "dashboard" | "commands" | "admin" | "contact";

interface StoreState {
  activeTab: Tabs;
  setActiveTab: (tab: Tabs) => void;
}

export const useUserStore = create<StoreState>(
  devtools(
    (set, get) => ({
      activeTab: "modules",
      setActiveTab: (tab: Tabs) => {
        set(
          produce((draft) => {
            draft.activeTab = tab;
          })
        );
      },
    }),
    {
      name: "userStore",
    }
  )
);
