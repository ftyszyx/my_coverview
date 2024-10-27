import { createContext, useState } from "react";
const ImgContext = createContext({});

const ImgProvider = ({ children }: { children: React.ReactNode }) => {
  const [unsplashImage, setUnsplashImage] = useState();

  return <ImgContext.Provider value={{ unsplashImage, setUnsplashImage }}>{children}</ImgContext.Provider>;
};

export { ImgProvider, ImgContext };
