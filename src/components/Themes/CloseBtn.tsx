import { IconType } from "@/entity/icon.entity";
import Icon from "../Icon";
import { useState } from "react";

interface CloseBtnProps {
  onclick: () => void;
}
export default function CloseBtn(props: CloseBtnProps) {
  const [hover, setHover] = useState(false);
  return (
    <button
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      onClick={props.onclick}
      className={`absolute  z-50 top-2 right-2 cursor-pointer  transition-opacity duration-300 ${hover ? "opacity-100" : "opacity-0"}`}
    >
      <Icon type={IconType.Close} svg className="w-8 h-8 " />
    </button>
  );
}
