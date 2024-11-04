import CoverImage from "./CoverImage";
import ComponentToImg from "./ComponentToImg";
import { ImgProvider } from "../utils/ImgContext";
import Header from "./Header";
import { NeedBgColor, NeedBgImg, THEMES } from "@/entity/app.entity";
import { useIntl } from "react-intl";
import { useAppStore } from "@/model/app.store";
import TextComp from "./TextComp";
import { Platform } from "@/entity/app.entity";
function Editor() {
  const intl = useIntl();
  const appset = useAppStore((x) => x.settings);
  const setSettings = useAppStore((x) => x.setSettings);
  const resetSettings = useAppStore((x) => x.resetSettings);
  return (
    <div className=" mx-auto">
      <Header />

      <ImgProvider>
        <div className="flex md:flex-row flex-col">
          <div className="bg-white flex flex-col h-[100px] w-3/12">
            <div>
              <div className="flex md:flex-row flex-col">
                <div className="bg-white font-Inter border-dashed border-r-2 border-gray-100 w-full p-4">
                  <div>
                    {/* Title input */}
                    <div className="m-2 flex flex-col">
                      <TextComp
                        type="textarea"
                        label={intl.formatMessage({ id: "blogTitle" })}
                        info={appset.title}
                        onChange={(value) => setSettings({ ...appset, title: value })}
                      />
                    </div>

                    {/* Author input */}
                    <div className="flex flex-col m-2">
                      <TextComp
                        type="text"
                        label={intl.formatMessage({ id: "author" })}
                        info={appset.author}
                        onChange={(value) => setSettings({ ...appset, author: value })}
                      />
                    </div>

                    {/* Description input */}
                    <div className="flex flex-col m-2">
                      <TextComp
                        type="textarea"
                        label={intl.formatMessage({ id: "description" })}
                        info={appset.description}
                        onChange={(value) => setSettings({ ...appset, description: value })}
                      />
                    </div>

                    {/* Background color input */}
                    {NeedBgColor(appset.theme) && (
                      <div className="flex flex-col m-2">
                        <label>{intl.formatMessage({ id: "bgColor" })}</label>
                        <input type="color" value={appset.bgColor} onChange={(e) => setSettings({ ...appset, bgColor: e.target.value })} />
                      </div>
                    )}
                    {NeedBgImg(appset.theme) && (
                      <div className="flex flex-col border-dashed border-2 border-gray-200 p-4">
                        <label>{intl.formatMessage({ id: "upload_a_bg" })}</label>
                        <input
                          type="file"
                          className="text-xl cursor-pointer mb-2 bg-white rounded border"
                          onChange={(e: any) =>
                            setSettings({ ...appset, bgImg: { ...appset.bgImg, datastr: URL.createObjectURL(e.target.files[0]) } })
                          }
                        />
                        <span className=" text-center italic">{intl.formatMessage({ id: "click_to_select_bg" })}</span>
                      </div>
                    )}

                    {/* Platform select */}
                    <div className="flexitems-center">
                      <div className="flex flex-col m-2 w-full">
                        <span className="font-medium text-sm pb-1">{intl.formatMessage({ id: "platform" })}</span>
                        <select
                          onChange={(e) => setSettings({ ...appset, platform: e.target.value as Platform })}
                          value={appset.platform}
                          className="focus:outline-none text-gray-700 text-lg p-2 rounded border"
                        >
                          {Object.values(Platform).map((platform) => (
                            <option key={platform} value={platform}>
                              {intl.formatMessage({ id: "platform_" + platform })}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Reset button */}
                    <button
                      className="flex items-center bg-gray-700 hover:bg-gray-800 text-white rounded-lg mt-6 text-base p-1 px-4 mx-auto border"
                      onClick={() => {
                        resetSettings();
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 16c1.671 0 3-1.331 3-3s-1.329-3-3-3-3 1.331-3 3 1.329 3 3 3z"></path>
                        <path d="M20.817 11.186a8.94 8.94 0 0 0-1.355-3.219 9.053 9.053 0 0 0-2.43-2.43 8.95 8.95 0 0 0-3.219-1.355 9.028 9.028 0 0 0-1.838-.18V2L8 5l3.975 3V6.002c.484-.002.968.044 1.435.14a6.961 6.961 0 0 1 2.502 1.053 7.005 7.005 0 0 1 1.892 1.892A6.967 6.967 0 0 1 19 13a7.032 7.032 0 0 1-.55 2.725 7.11 7.11 0 0 1-.644 1.188 7.2 7.2 0 0 1-.858 1.039 7.028 7.028 0 0 1-3.536 1.907 7.13 7.13 0 0 1-2.822 0 6.961 6.961 0 0 1-2.503-1.054 7.002 7.002 0 0 1-1.89-1.89A6.996 6.996 0 0 1 5 13H3a9.02 9.02 0 0 0 1.539 5.034 9.096 9.096 0 0 0 2.428 2.428A8.95 8.95 0 0 0 12 22a9.09 9.09 0 0 0 1.814-.183 9.014 9.014 0 0 0 3.218-1.355 8.886 8.886 0 0 0 1.331-1.099 9.228 9.228 0 0 0 1.1-1.332A8.952 8.952 0 0 0 21 13a9.09 9.09 0 0 0-.183-1.814z"></path>
                      </svg>
                      <span className="font-Inter">{intl.formatMessage({ id: "resetAll" })}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cover image preview */}
          <div className="flex w-1/2 m-2 flex-col items-center justify-center">
            <ComponentToImg>
              <CoverImage />
            </ComponentToImg>
          </div>

          {/* Themes section */}
          <div className=" w-3/12  px-4 border-dashed border-l-2 border-gray-100 bg-white">
            <div className="h-[var(--editor-theme-height)] w-full flex flex-col justify-center">
              <div className="flex items-center">
                <h2 className="text-lg pl-2 font-inter font-semibold">{intl.formatMessage({ id: "theme" })}</h2>
              </div>

              <div className="flex gap-2 flex-wrap justify-center overflow-y-scroll">
                {THEMES.map((theme) => (
                  <div className={`${theme.theme === appset.theme ? "border-blue-400 border-2" : ""}`} key={theme.label}>
                    <img
                      src={theme.preview}
                      alt={theme.label}
                      onClick={() => setSettings({ ...appset, theme: theme.theme })}
                      className="max-w-[var(--editor-theme-width)] cursor-pointer border border-gray-100 hover:border-gray-200 hover:scale-105 duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ImgProvider>
    </div>
  );
}

export default Editor;
