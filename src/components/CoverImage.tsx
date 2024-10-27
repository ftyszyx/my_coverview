import "./CoverImage.css";
import "../assets/css/patterns.css";
import ModernTheme from "./Themes/ModernTheme";
import BasicTheme from "./Themes/BasicTheme";
import OutlineTheme from "./Themes/OutlineTheme";
import PreviewTheme from "./Themes/PreviewTheme";
import StylishTheme from "./Themes/StylishTheme";
import MobileMockupTheme from "./Themes/MobileMockupTheme";
import BackgroundTheme from "./Themes/BackgroundTheme";
import { Theme } from "@/entity/app.entity";
import { useAppStore } from "@/model/app.store";
import UnsplashSearch from "./UnsplashSearch";

const CoverImage = () => {
  const appset = useAppStore((set) => set.settings);

  const selectTheme = (theme: Theme) => {
    switch (theme) {
      case Theme.Basic:
        return <BasicTheme />;
      case Theme.Modern:
        return <ModernTheme />;
      case Theme.Outline:
        return <OutlineTheme />;
      case Theme.Preview:
        return <PreviewTheme />;
      case Theme.Stylish:
        return <StylishTheme />;
      case Theme.Mobile:
        return <MobileMockupTheme />;
      case Theme.Background:
        return <BackgroundTheme />;
      default:
        return <UnsplashSearch />;
    }
  };

  return <div className={`border-2  border-gray-50 md:scale-100 scale-50 ${appset.platform}`}>{selectTheme(appset.theme)}</div>;
};

export default CoverImage;
