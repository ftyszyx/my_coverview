import { Font, InputTextType, TextSettings } from "@/entity/app.entity";

interface TextCompProps {
  type: InputTextType;
  label: string;
  info: TextSettings;
  onChange: (value: TextSettings) => void;
}

export default function TextComp(props: TextCompProps) {
  const { info, onChange } = props;
  return (
    <div>
      <label>{props.label}</label>
      {props.type === "text" ? (
        <input type="text" value={info.text} onChange={(e) => onChange({ ...info, text: e.target.value })} />
      ) : (
        <textarea value={info.text} onChange={(e) => onChange({ ...info, text: e.target.value })} />
      )}
      <select value={info.font} onChange={(e) => onChange({ ...info, font: e.target.value })}>
        {Object.keys(Font).map((font) => (
          <option value={font}>{font}</option>
        ))}
      </select>
      <input type="color" value={info.color} onChange={(e) => onChange({ ...info, color: e.target.value })} />
    </div>
  );
}
