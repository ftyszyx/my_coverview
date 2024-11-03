import { useMemo } from "react";
import { IntlProvider } from "react-intl";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { messages, defaultLocale, SupportedLocales } from "../lang";
import Home from "./Home";
import Editor from "./Editor";
import { useAppStore } from "@/model/app.store";

function App() {
  const language = useAppStore((state) => state.language);
  const routes = useMemo(() => {
    let res = [
      {
        path: "/",
        element: <Navigate to={`/${language}/editor`} />,
      },
      {
        path: "/editor",
        element: <Navigate to={`/${language}/editor`} />,
      },
      {
        path: "/faq",
        element: <Navigate to={`/${language}/faq`} />,
      },
    ];
    SupportedLocales.forEach((locale: string) => {
      res.push({
        path: `/${locale}`,
        element: <Home />,
      });
      res.push({
        path: `/${locale}/editor`,
        element: <Editor />,
      });
    });
    return res;
  }, [language]);
  console.log("cur locale", language);

  const router = createBrowserRouter(routes);
  // Create language-specific route paths

  return (
    <IntlProvider messages={messages[language as keyof typeof messages]} locale={language} defaultLocale={defaultLocale}>
      <RouterProvider router={router} />
    </IntlProvider>
  );
}

export default App;
