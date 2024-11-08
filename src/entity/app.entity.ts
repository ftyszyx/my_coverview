export enum Font {
  Serif = "font-serif",
  Sans = "font-sans",
  Mono = "font-mono",
}

export type InputTextType = "text" | "textarea";

export interface TextSettings {
  text: string;
  font: string;
  color: string;
  fontSize: string;
}

export interface Iconsetting {
  label: string;
  type_value: string;
  src: string;
}

export enum Theme {
  Basic = "basic",
  Outline = "outline",
  Stylish = "stylish",
  Background = "background",
}

export function NeedBgColor(theme: Theme) {
  return theme === Theme.Stylish || theme === Theme.Basic || theme == Theme.Outline;
}
export function NeedBgImg(theme: Theme) {
  return theme === Theme.Stylish || theme === Theme.Background;
}

export enum Platform {
  Hashnode = "hashnode",
  Wechat = "wechat",
}

export interface ThemeItem {
  label: string;
  preview: string;
  theme: Theme;
}

export interface Imgset {
  imgurl?: string;
  datastr?: string;
}

export interface EditorSettings {
  title: TextSettings;
  bgColor: string;
  bgImg?: Imgset;
  pattern: string;
  author: TextSettings;
  description: TextSettings;
  icon: Iconsetting;
  theme: Theme;
  platform: Platform;
}

import backgroundThemePlaceholder from "../assets/images/background-theme-placeholder.webp";
import basicThemePlaceholder from "../assets/images/basic-theme-placeholder.webp";
import stylishThemePlaceholder from "../assets/images/stylish-theme-placeholder.webp";
import outlineThemePlaceholder from "../assets/images/outline-theme-placeholder.webp";

export const THEMES: ThemeItem[] = [
  {
    label: "background",
    preview: backgroundThemePlaceholder,
    theme: Theme.Background,
  },
  {
    label: "stylish",
    preview: stylishThemePlaceholder,
    theme: Theme.Stylish,
  },
  {
    label: "basic",
    preview: basicThemePlaceholder,
    theme: Theme.Basic,
  },
  {
    label: "outline",
    preview: outlineThemePlaceholder,
    theme: Theme.Outline,
  },
];
