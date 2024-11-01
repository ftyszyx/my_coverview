import { EditorSettings, Iconsetting, Imgset, Platform, TextSettings, Theme } from "@/entity/app.entity";
import { create } from "zustand";
const defaultTextSettings: TextSettings = { text: "", font: "", color: "#000000", fontSize: "16px" };
const defaultIcon: Iconsetting = { label: "react", type_value: "react", src: "" };

interface AppStore {
  settings: EditorSettings;
  setSettings: (settings: EditorSettings) => void;
  getSettings: () => EditorSettings;
  resetSettings: () => void;
  clearBgImg: () => void;
}

export const defaultSettings: EditorSettings = {
  title: defaultTextSettings,
  bgColor: "#949ee5",
  pattern: "",
  author: defaultTextSettings,
  description: defaultTextSettings,
  icon: defaultIcon,
  theme: Theme.Background,
  platform: Platform.Hashnode,
};

export const useAppStore = create<AppStore>((set, get) => ({
  settings: defaultSettings,
  setSettings: (settings: EditorSettings) => set({ settings }),
  getSettings: () => get().settings,
  resetSettings: () => set({ settings: defaultSettings }),
  clearBgImg: () => {
    const settings = get().settings;
    const newset = { ...settings };
    newset.bgImg = undefined;
    set({ settings: newset });
  },
}));
