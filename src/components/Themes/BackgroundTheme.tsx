import { useAppStore } from "@/model/app.store";

const BackgroundTheme = () => {
  const appset = useAppStore((state) => state.settings);
  const setSettings = useAppStore((state) => state.setSettings);

  return (
    <div className=" bg-white ">
      <div className={` overflow-y-hidden flex flex-col`} style={{ backgroundColor: appset.bgColor }}>
        <div className="flex flex-row  items-center bg-white  justify-center ">
          <div className="w-full">
            {
              <div className="relative flex group">
                <div className="h-max w-full ">
                  <img src={appset.bgImg.datastr || appset.bgImg.imgurl} className=" object-cover h-full w-full  " alt="preview" />
                </div>

                <div className="h-full bg-gray-800/60 absolute top-0 right-0 left-0 ">
                  <button
                    onClick={() => {
                      setSettings({ ...appset, bgImg: { imgurl: "", datastr: "" } });
                    }}
                    className="absolute  top-2 right-2 cursor-pointer"
                  >
                    <svg
                      className="group-hover:inline-block hidden w-8 h-8 text-gray-800 bg-white p-2 rounded-full z-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>

                  <div className={`${appset.title.font} px-10 pt-32  text-left rounded-xl h-full p-4 flex flex-col`}>
                    <h1 className=" md:text-5xl text-center text-2xl font-bold text-white">{appset.title.text}</h1>
                    <div className="flex flex-col items-center py-10  ">
                      <h2 className="text-xl  font-semibold text-left text-white ">{appset.author.text}</h2>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundTheme;
