import React, { useState, useEffect, useCallback } from "react";
import CoverImage from "./CoverImage";
import ComponentToImg from "./ComponentToImg";
import Select from "react-select";
import RandomTheme from "./RandomTheme";
import { ImgProvider } from "../utils/ImgContext";
import Header from "./Header";

import { THEMES } from "../utils/constants";
import { useIntl } from "react-intl";

const defaultIcon = { label: "react", value: "react" };

const defaultSettings = {
  title: "",
  bgColor: "#949ee5",
  pattern: "",
  download: "PNG",
  author: "",
  description: "",
  icon: defaultIcon,
  devIconOptions: [defaultIcon],
  font: "font-Anek",
  theme: "background",
  customIcon: "",
  platform: "hashnode",
};

const devIconsUrl = "https://raw.githubusercontent.com/devicons/devicon/master/devicon.json";

function Editor() {
  const intl = useIntl();
  const [settings, setSettings] = useState(defaultSettings);

  useEffect(() => {
    fetch(devIconsUrl)
      .then((r) => r.json())
      .then((data) => {
        data.unshift({ name: "upload your own" });
        setSettings((prevSettings) => ({
          ...prevSettings,
          devIconOptions: data.map((item) => ({ value: item.name, label: item.name })),
        }));
      });
  }, []);

  const handleReset = useCallback(() => {
    setSettings((prevSettings) => ({
      ...defaultSettings,
      devIconOptions: prevSettings.devIconOptions,
    }));
  }, []);

  const getRandomTheme = useCallback((theme, Pattern) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      bgColor: theme.bgColor,
      borderColor: theme.bdColor,
      pattern: Pattern,
    }));
  }, []);

  const formatOptionLabel = useCallback(
    ({ value, label }) => (
      <div className="flex">
        <span className="mr-2">{label}</span>
        <div className="ml-auto mr-2">
          <i className={`devicon-${value}-plain dev-icon text-2xl`}></i>
        </div>
      </div>
    ),
    []
  );

  const handleSettingChange = useCallback((key, value) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [key]: value,
    }));
  }, []);

  return (
    <div className="max-w-[1400px] mx-auto">
      <Header />

      <ImgProvider>
        <div className="flex md:flex-row flex-col">
          <div className="bg-white flex flex-col h-100 md:w-3/12">
            <div>
              <div className="flex md:flex-row flex-col">
                <div className="bg-white font-Inter border-dashed border-r-2 border-gray-100 w-full p-4">
                  <div>
                    {/* Title input */}
                    <div className="m-2 flex flex-col">
                      <span className="font-medium text-sm pb-1">{intl.formatMessage({ id: "blogTitle" })}</span>
                      <textarea
                        value={settings.title}
                        placeholder={intl.formatMessage({ id: "enterTitleHere" })}
                        className="focus:outline-none border text-gray-700 text-lg rounded p-2 h-24"
                        onChange={(e) => handleSettingChange("title", e.target.value)}
                      />
                    </div>

                    {/* Author input */}
                    <div className="flex flex-col m-2">
                      <span className="font-medium text-sm pb-1">{intl.formatMessage({ id: "author" })}</span>
                      <input
                        type="text"
                        value={settings.author}
                        placeholder={intl.formatMessage({ id: "enterAuthorHere" })}
                        className="focus:outline-none border text-gray-700 text-lg rounded bg-white p-2"
                        onChange={(e) => handleSettingChange("author", e.target.value)}
                      />
                    </div>

                    {/* Icon select */}
                    <div className="flex flex-col m-2">
                      <span className="font-medium text-sm pb-1">{intl.formatMessage({ id: "icon" })}</span>
                      <Select
                        value={settings.icon}
                        onChange={(selectedOption) => handleSettingChange("icon", selectedOption)}
                        options={settings.devIconOptions}
                        formatOptionLabel={formatOptionLabel}
                        className="outline-none focus:outline-none items-center text-lg text-gray-700"
                      />
                    </div>

                    {/* Description input */}
                    <div className="flex flex-col m-2">
                      <span className="font-medium text-sm pb-1">{intl.formatMessage({ id: "description" })}</span>
                      <textarea
                        value={settings.description}
                        placeholder={intl.formatMessage({ id: "enterDescriptionHere" })}
                        className="focus:outline-none border text-gray-700 text-lg rounded p-2 h-24"
                        onChange={(e) => handleSettingChange("description", e.target.value)}
                      />
                    </div>

                    {/* Custom icon upload */}
                    {settings.icon.label === intl.formatMessage({ id: "uploadYourOwn" }) && (
                      <div className="flex items-center justify-center w-64 mx-auto">
                        <input
                          type="file"
                          className="focus:outline-none w-full text-sm cursor-pointer bg-white rounded border"
                          onChange={(e) => handleSettingChange("customIcon", URL.createObjectURL(e.target.files[0]))}
                        />
                      </div>
                    )}

                    {/* Font and Color selectors */}
                    <div className="flex items-center">
                      {/* Font select */}
                      <div className="flex flex-col m-2 w-1/2">
                        <span className="font-medium text-sm pb-1">{intl.formatMessage({ id: "font" })}</span>
                        <select
                          value={settings.font}
                          onChange={(e) => handleSettingChange("font", e.target.value)}
                          className="focus:outline-none text-gray-700 text-lg p-2 rounded border"
                        >
                          <option>font-serif</option>
                          <option>font-sans</option>
                          <option>font-mono</option>
                          <option>font-Inter</option>
                          <option>font-Poppins</option>
                          <option>font-Anek</option>
                        </select>
                      </div>

                      {/* Color picker */}
                      <div className="flex flex-col m-2 w-1/2">
                        <span className="font-medium text-sm pb-1">Color</span>
                        <div className="border rounded flex items-center p-1">
                          <input
                            type="color"
                            value={settings.bgColor}
                            onChange={(e) => handleSettingChange("bgColor", e.target.value)}
                            className="h-8 w-full rounded"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Platform select */}
                    <div className="flex items-center">
                      <div className="flex flex-col m-2 w-full">
                        <span className="font-medium text-sm pb-1">{intl.formatMessage({ id: "platform" })}</span>
                        <select
                          onChange={(e) => handleSettingChange("platform", e.target.value)}
                          value={settings.platform}
                          className="focus:outline-none text-gray-700 text-lg p-2 rounded border"
                        >
                          <option>{intl.formatMessage({ id: "hashnode" })}</option>
                          <option>{intl.formatMessage({ id: "dev" })}</option>
                        </select>
                      </div>
                    </div>

                    {/* Reset button */}
                    <button
                      className="flex items-center bg-gray-700 hover:bg-gray-800 text-white rounded-lg mt-6 text-base p-1 px-4 mx-auto border"
                      onClick={handleReset}
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
          <div className="flex m-2 flex-col items-center justify-center">
            <ComponentToImg downloadAs={settings.download}>
              <CoverImage {...settings} />
            </ComponentToImg>
          </div>

          {/* Themes section */}
          <div className="md:w-60 px-4 border-dashed border-l-2 border-gray-100 bg-white">
            <div className="h-99 w-full flex flex-col justify-center">
              <div className="flex items-center">
                <h2 className="text-lg pl-2 font-inter font-semibold">Themes</h2>
                <div className="ml-auto mr-1 p-2">
                  <RandomTheme onThemeChange={getRandomTheme} />
                </div>
              </div>

              <div className="flex gap-2 flex-wrap justify-center overflow-y-scroll">
                {THEMES.map((themePlaceholder) => (
                  <div className={`${themePlaceholder.label === settings.theme ? "border-blue-400 border-2" : ""}`} key={themePlaceholder.label}>
                    <img
                      src={themePlaceholder.preview}
                      alt={themePlaceholder.label}
                      onClick={() => handleSettingChange("theme", themePlaceholder.label)}
                      className="cursor-pointer border border-gray-100 hover:border-gray-200 hover:scale-105 duration-300"
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
