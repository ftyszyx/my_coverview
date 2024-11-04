import { useAppStore } from "@/model/app.store";
import UnsplashSearch from "../UnsplashSearch";
import ThemeFront from "./ThemeFront";
import CloseBtn from "./CloseBtn";
import BackImg from "./BackImg";

const BackgroundTheme = () => {
  const appset = useAppStore((state) => state.settings);
  const clearBgImg = useAppStore((state) => state.clearBgImg);
  console.log("background theme render", appset);

  return (
    <div className=" bg-white ">
      <div className={`  overflow-y-hidden flex flex-col scale-100`} style={{ backgroundColor: appset.bgColor }}>
        <div className="flex flex-row  items-center bg-white  justify-center ">
          <div className="w-full">
            {appset.bgImg != undefined && appset.bgImg != null ? (
              <div className="relative flex group">
                <div className=" w-full ">
                  <BackImg />
                  <CloseBtn onclick={clearBgImg} />
                </div>

                <div className="h-full bg-gray-800/60 absolute top-0 right-0 left-0 ">
                  <div className={` px-10 pt-32  text-left rounded-xl h-full p-4 flex flex-col`}>
                    <ThemeFront align="center" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex  w-full flex-col bg-white items-center justify-center">
                <UnsplashSearch pic_width={240} pic_height={176} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundTheme;
