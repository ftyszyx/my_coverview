import { create } from "zustand";

const defaultSettings = {
  title: "",
  bgColor: "#949ee5",
  pattern: "",
  download: "PNG",
  author: "",
  description: "",
  icon: defaultIcon,
  devIconOptions: [defaultIcon],
  font: "font-Anek",
  theme: "background",
  customIcon: "",
  platform: "hashnode",
};

interface AppStore {}
export const useAppStore = create < AppStore > ((set) => ({}));
