export enum Font {
  Serif = "font-serif",
  Sans = "font-sans",
  Mono = "font-mono",
  Inter = "font-Inter",
  Poppins = "font-Poppins",
  Anek = "font-Anek",
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
  Modern = "modern",
  Outline = "outline",
  Preview = "preview",
  Stylish = "stylish",
  Mobile = "mobile",
  Background = "background",
}

export enum Platform {
  Hashnode = "hashnode",
  Dev = "dev",
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
import modernThemePlaceholder from "../assets/images/modern-theme-placeholder.webp";
import stylishThemePlaceholder from "../assets/images/stylish-theme-placeholder.webp";
import outlineThemePlaceholder from "../assets/images/outline-theme-placeholder.webp";
import previewThemePlaceholder from "../assets/images/preview-theme-placeholder.webp";
import mobileThemePlaceholder from "../assets/images/mobile-theme-placeholder.webp";

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
    label: "modern",
    preview: modernThemePlaceholder,
    theme: Theme.Modern,
  },
  {
    label: "outline",
    preview: outlineThemePlaceholder,
    theme: Theme.Outline,
  },
  {
    label: "preview",
    preview: previewThemePlaceholder,
    theme: Theme.Preview,
  },
  {
    label: "mobile",
    preview: mobileThemePlaceholder,
    theme: Theme.Mobile,
  },
];
