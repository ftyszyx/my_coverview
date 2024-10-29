import { Font, InputTextType, TextSettings } from "@/entity/app.entity";
import { useState } from "react";

interface TextCompProps {
  type: InputTextType;
  label: string;
  info: TextSettings;
  onChange: (value: TextSettings) => void;
}

export default function TextComp(props: TextCompProps) {
  const [showdetails, setShowDetails] = useState(false);
  const { info, onChange } = props;
  return (
    <div className="border-[2px] border-gray-300 rounded-lg p-2 border-dashed">
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
      {showdetails && (
        <>
          <select value={info.font} onChange={(e) => onChange({ ...info, font: e.target.value })}>
            {Object.keys(Font).map((font) => (
              <option value={font}>{font}</option>
            ))}
          </select>
          <input type="color" value={info.color} onChange={(e) => onChange({ ...info, color: e.target.value })} />
        </>
      )}
    </div>
  );
}
