import "./CoverImage.css";
import BasicTheme from "./Themes/BasicTheme";
import OutlineTheme from "./Themes/OutlineTheme";
import StylishTheme from "./Themes/StylishTheme";
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
      case Theme.Outline:
        return <OutlineTheme />;
      case Theme.Stylish:
        return <StylishTheme />;
      case Theme.Background:
        return <BackgroundTheme />;
      default:
        return <UnsplashSearch />;
    }
  };

  return (
    <div className={`border-2  border-gray-50  ${appset.platform}-theme-height ${appset.platform}-theme-width`}>{selectTheme(appset.theme)}</div>
  );
};

export default CoverImage;
