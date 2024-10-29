import ReactDOM from "react-dom/client";
import "@assets/css/tailwind_out.css";
import "./index.css";
import "@/assets/iconfont/iconfont.css";
import "@/assets/iconfont/iconfont.js";

import App from "./components/App";

ReactDOM.createRoot(document.querySelector("#root")!).render(<App />);
