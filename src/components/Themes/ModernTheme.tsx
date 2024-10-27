import { useAppStore } from "@/model/app.store";

const ModernTheme = () => {
  const appset = useAppStore((state) => state.settings);

  return (
    <div className="w-full h-full bg-white ">
      <div className=" overflow-y-hidden w-full h-full flex  items-center">
        <div className={`  h-full w-full p-4 text-gray-800 flex  items-center ${appset.pattern} `} style={{ backgroundColor: appset.bgColor }}>
          <div className="h-full w-2/3">
            <div className={`${appset.title.font} bg-white px-12 justify-center text-left rounded-xl h-full p-4 flex flex-col`}>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800">{appset.title.text}</h1>
              <h2 className="text-xl mt-10 font-semibold text-left ">{appset.author.text}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernTheme;
