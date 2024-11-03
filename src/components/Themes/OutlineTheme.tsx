import { useAppStore } from "@/model/app.store";
import ThemeFront from "./ThemeFront";

const OutlineTheme = () => {
  const appset = useAppStore((state) => state.settings);
  console.log("outline theme render", appset);
  return (
    <div className="w-full h-full bg-white ">
      <div className={`overflow-y-hidden flex py-5 flex-col text-gray-800 px-10 h-full`} style={{ backgroundColor: appset.bgColor }}>
        <ThemeFront align="left" />
      </div>
    </div>
  );
};

export default OutlineTheme;
