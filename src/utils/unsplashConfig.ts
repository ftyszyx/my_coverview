import { createApi } from "unsplash-js";

declare const process: {
  env: {
    REACT_APP_API_ACCESS_KEY: string;
  };
};

const key = process.env.REACT_APP_API_ACCESS_KEY;
const unsplash = createApi({
  accessKey: key,
});

export default unsplash;
