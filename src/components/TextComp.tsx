import { Font, InputTextType, TextSettings } from "@/entity/app.entity";
import { useState } from "react";
import Icon from "./Icon";
import { IconType } from "@/entity/icon.entity";
import { useIntl } from "react-intl";

interface TextCompProps {
  type: InputTextType;
  label: string;
  info: TextSettings;
  onChange: (value: TextSettings) => void;
}

export default function TextComp(props: TextCompProps) {
  const intl = useIntl();
  const [showdetails, setShowDetails] = useState(false);
  const { info, onChange } = props;
  return (
    <div className="border-[2px] border-gray-300 rounded-lg p-2 border-dashed flex flex-col">
      <label>{props.label}</label>
      {props.type === "text" ? (
        <input
          className="border-[1px] border-gray-300 rounded-md p-1"
          type="text"
          value={info.text}
          onChange={(e) => onChange({ ...info, text: e.target.value })}
        />
      ) : (
        <textarea
          className="border-[1px] border-gray-300 rounded-md p-1"
          value={info.text}
          onChange={(e) => onChange({ ...info, text: e.target.value })}
        />
      )}
      <Icon
        svg
        type={IconType.Xiangxi}
        onClick={() => setShowDetails(!showdetails)}
        className={`w-[20px] h-[20px] ${showdetails ? " rotate-180" : "rotate-0"}`}
      />

      {showdetails && (
        <div className="flex items-center gap-2">
          <label>{intl.formatMessage({ id: "font" })}</label>
          <select value={info.font} onChange={(e) => onChange({ ...info, font: e.target.value })}>
            {Object.keys(Font).map((font) => (
              <option key={font} value={Font[font as keyof typeof Font]}>
                {font}
              </option>
            ))}
          </select>
          <label>{intl.formatMessage({ id: "color" })}</label>
          <input type="color" value={info.color} onChange={(e) => onChange({ ...info, color: e.target.value })} />
        </div>
      )}
    </div>
  );
}
