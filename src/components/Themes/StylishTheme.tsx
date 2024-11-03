import { useAppStore } from "@/model/app.store";
import UnsplashSearch from "../UnsplashSearch";
import ThemeFront from "./ThemeFront";
import CloseBtn from "./CloseBtn";
import BackImg from "./BackImg";

const StylishTheme = () => {
  const appset = useAppStore((state) => state.settings);
  console.log("stylish theme render", appset);
  const cleanbg = useAppStore((state) => state.clearBgImg);
  return (
    <div className=" bg-white w-full h-full">
      <div className={` overflow-y-hidden flex flex-col`}>
        <div className="flex flex-row  items-center   justify-center">
          <div
            className={` flex flex-col items-center justify-center w-1/2  rounded-l-xl ${appset.platform}-theme-height`}
            style={{ backgroundColor: appset.bgColor }}
          >
            <ThemeFront align="center" />
          </div>
          <div className="w-1/2 h-full">
            {appset.bgImg != null ? (
              <div className="relative w-full -max flex group">
                <BackImg />
                <CloseBtn onclick={cleanbg} />
              </div>
            ) : (
              <div className="flex  w-full flex-col bg-white items-center justify-center">
                <UnsplashSearch />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StylishTheme;
