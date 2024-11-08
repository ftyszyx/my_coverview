import { EditorSettings, Font, Iconsetting, Platform, TextSettings, Theme } from "@/entity/app.entity";
import { create } from "zustand";
const defaultTextSettings: TextSettings = { text: "", font: Font.Serif, color: "#ffffff", fontSize: "16px" };
const defaultIcon: Iconsetting = { label: "react", type_value: "react", src: "" };

interface AppStore {
  settings: EditorSettings;
  setSettings: (settings: EditorSettings) => void;
  getSettings: () => EditorSettings;
  resetSettings: () => void;
  clearBgImg: () => void;
  language: string;
  setLanguage: (language: string) => void;
  getLanguage: () => string;
}

export const defaultSettings: EditorSettings = {
  title: { ...defaultTextSettings, text: "Title" },
  bgColor: "#949ee5",
  pattern: "",
  author: { ...defaultTextSettings, text: "Author" },
  description: { ...defaultTextSettings, text: "Description" },
  icon: defaultIcon,
  theme: Theme.Background,
  platform: Platform.Wechat,
};

export const useAppStore = create<AppStore>((set, get) => ({
  settings: defaultSettings,
  setSettings: (settings: EditorSettings) => set({ ...get(), settings }),
  getSettings: () => get().settings,
  resetSettings: () => set({ ...get(), settings: defaultSettings }),
  clearBgImg: () => {
    const settings = get().settings;
    const newset = { ...settings };
    newset.bgImg = undefined;
    set({ ...get(), settings: newset });
  },
  language: "zh-CN",
  setLanguage: (language: string) => set({ ...get(), language }),
  getLanguage: () => get().language,
}));
