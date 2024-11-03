import { useAppStore } from "@/model/app.store";
import ThemeFront from "./ThemeFront";

const BasicTheme = () => {
  const settings = useAppStore((state) => state.settings);
  console.log("basic theme render", settings);
  return (
    <div className=" bg-white w-full h-full ">
      <div
        className={`overflow-y-hidden flex flex-col justify-center text-gray-800 items-center h-full ${settings.platform} `}
        style={{ backgroundColor: settings.bgColor }}
      >
        <ThemeFront align="center" />
      </div>
    </div>
  );
};

export default BasicTheme;
