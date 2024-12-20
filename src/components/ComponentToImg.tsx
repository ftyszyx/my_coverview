import React, { useRef, useState } from "react";
import "./CoverImage.css";
import domtoimage from "dom-to-image";
import { useAppStore } from "@/model/app.store";
import { useIntl } from "react-intl";

interface ComponentToImgProps {
  children: React.ReactNode;
}
const ComponentToImg = (props: ComponentToImgProps) => {
  const [loading, setLoading] = useState(false);
  const appset = useAppStore((state) => state.settings);
  const intl = useIntl();

  const componentRef = useRef<HTMLDivElement>(null);

  async function saveImage(data: string) {
    var a = document.createElement("A") as HTMLAnchorElement;
    a.href = data;
    a.download = `cover.png`;
    document.body.appendChild(a);
    setLoading(false);

    a.click();
    document.body.removeChild(a);
  }

  const downloadImage = async () => {
    setLoading(true);

    const element = componentRef.current as HTMLDivElement;

    let data = await domtoimage.toPng(element, {
      height: element.offsetHeight * 2,
      width: element.offsetWidth * 2,
      style: {
        transform: "scale(" + 2 + ")",
        transformOrigin: "top left",
        width: element.offsetWidth + "px",
        height: element.offsetHeight + "px",
      },
    });

    // console.log(data)
    await saveImage(data);
  };

  return (
    <React.Fragment>
      <div className=" flex flex-col items-center ">
        <div ref={componentRef}>{props.children}</div>
        {appset.bgImg?.datastr ||
          (appset.bgImg?.imgurl && (
            <button
              className="border p-2 bg-gray-700 hover:bg-gray-800 flex items-center text-white text-xl rounded-lg m-4 px-4"
              onClick={() => downloadImage()}
            >
              <span>
                {loading ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white animate animate-spin"
                    fill="currentColor"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"></path>
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    ></path>
                  </svg>
                )}
              </span>

              <span className="mx-2">{intl.formatMessage({ id: "download" })}</span>
            </button>
          ))}
      </div>
    </React.Fragment>
  );
};

export default ComponentToImg;
