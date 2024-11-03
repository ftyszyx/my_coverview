import { useAppStore } from "@/model/app.store";
interface ThemeFrontProps {
  align: "left" | "center";
}
export default function ThemeFront(props: ThemeFrontProps) {
  const appset = useAppStore((state) => state.settings);
  return (
    <div>
      <div className={`flex flex-col ${props.align === "left" ? "items-start" : "items-center"}`}>
        <h1 className={`${appset.title.font} md:text-5xl  text-2xl  `} style={{ color: appset.title.color }}>
          {appset.title.text}
        </h1>
        <div className="  py-10  ">
          <h2 className={`text-xl   text-left  text  ${appset.author.font}`} style={{ color: appset.author.color }}>
            {appset.author.text}
          </h2>
        </div>
        <div className=" py-2">
          <h2 className={`text-xl w-[70%] text-left  text-wrap  ${appset.description.font}`} style={{ color: appset.description.color }}>
            {appset.description.text}
          </h2>
        </div>
      </div>
    </div>
  );
}
