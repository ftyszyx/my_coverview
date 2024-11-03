import { useAppStore } from "@/model/app.store";

export default function BackImg() {
  const appset = useAppStore((state) => state.settings);
  return (
    <div>
      <img
        src={appset.bgImg?.datastr || appset.bgImg?.imgurl}
        className={`${appset.platform}-theme-width ${appset.platform}-theme-height object-cover`}
        alt="preview"
      />
    </div>
  );
}
