import { useAppStore } from "@/model/app.store";
import UnsplashSearch from "../UnsplashSearch";

const StylishTheme = () => {
  const appset = useAppStore((state) => state.settings);
  const cleanbg = useAppStore((state) => state.clearBgImg);
  return (
    <div className=" bg-white w-full h-full">
      <div className={` overflow-y-hidden flex flex-col`} style={{ backgroundColor: appset.bgColor }}>
        <div className="flex flex-row  items-center bg-white  justify-center">
          <div className="h-full w-1/2  bg-white rounded-l-xl">
            <div className={`${appset.title.font} px-12 justify-center text-left rounded-xl h-full p-4 flex flex-col`}>
              <h1 className=" text-4xl font-bold text-gray-800">{appset.title.text}</h1>
              <div className="flex items-center mt-10 text-left">
                <h2 className="text-xl  font-semibold text-left ">{appset.author.text}</h2>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full">
            {appset.bgImg != null ? (
              <div className="relative w-full h-max flex group">
                <img src={appset.bgImg.imgurl && appset.bgImg.datastr} className=" object-cover w-full h-full  " alt="preview" />

                <button onClick={cleanbg} className="absolute  top-4 right-2 cursor-pointer">
                  <svg
                    className="group-hover:inline-block hidden w-6 h-6 text-gray-800 bg-white p-1 rounded-full z-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
            ) : (
              <div className="flex h-max w-full flex-col bg-white items-center justify-center">
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
