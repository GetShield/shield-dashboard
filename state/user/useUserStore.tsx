import create from "zustand";
import produce from "immer";
import { devtools } from "zustand/middleware";

export type Tabs =
  | "modules"
  | "dashboard"
  | "commands"
  | "admin"
  | "contact"
  | "premium";

export interface Channel {
  id: number;
  name: string;
  unavailable: boolean;
}

interface StoreState {
  activeTab: Tabs;
  setActiveTab: (tab: Tabs) => void;
  selectedChannel: Channel;
  setSelectedChannel: (channel: Channel) => void;
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
      selectedChannel: {
        id: 1,
        name: "#alerts",
        unavailable: false,
      },
      setSelectedChannel: (channel: Channel) => {
        set(
          produce((draft) => {
            draft.selectedChannel = channel;
          })
        );
      },
    }),
    {
      name: "userStore",
    }
  )
);
