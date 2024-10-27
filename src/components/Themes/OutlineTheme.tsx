import { useAppStore } from "@/model/app.store";

const OutlineTheme = () => {
  const appset = useAppStore((state) => state.settings);

  return (
    <div className="w-full h-full bg-white ">
      <div className={`overflow-y-hidden flex flex-col text-gray-800 px-10 h-full`} style={{ backgroundColor: appset.bgColor }}>
        <div className={`${appset.title.font} rounded-2xl py-6 flex flex-col  `}>
          <h1 className="text-3xl p-4 text-white md:text-5xl  font-bold ">{appset.title.text}</h1>
          <div className={`${appset.title.font} w-full h-16  flex  mt-auto mb-0 p-2 px-6  items-center `}>
            <h2 className="text-2xl text-white font-semibold">{appset.author.text}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutlineTheme;
