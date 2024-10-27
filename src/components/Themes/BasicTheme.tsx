import { useAppStore } from "@/model/app.store";

const BasicTheme = () => {
  const settings = useAppStore((state) => state.settings);

  return (
    <div className=" bg-white w-full h-full ">
      <div
        className={`overflow-y-hidden flex  text-gray-800 items-center h-full ${settings.platform} `}
        style={{ backgroundColor: settings.bgColor }}
      >
        <div className={`${settings.title.font} bg-white md:w-10/12  m-auto flex flex-col pt-12 rounded-xl`}>
          <div className="px-12">
            <div>
              <h1 className="text-3xl md:text-5xl text-gray-800 font-bold text-center">{settings.title.text}</h1>
            </div>
          </div>

          <div className=" flex mx-4  p-4 rounded-xl items-center bg-white">
            <h2 className="text-xl ml-auto mr-2 font-semibold">{settings.author.text}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicTheme;
