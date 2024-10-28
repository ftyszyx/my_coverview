import { useMemo, useState } from "react";
import { IntlProvider } from "react-intl";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { messages, defaultLocale, SupportedLocales } from "../lang";
import Home from "./Home";
import Editor from "./Editor";

function App() {
  const [locale, setLocale] = useState<(typeof SupportedLocales)[number]>(defaultLocale);
  const routes = useMemo(() => {
    let res = [
      {
        path: "/",
        element: <Navigate to={`/${locale}/editor`} />,
      },
      {
        path: "/editor",
        element: <Navigate to={`/${locale}/editor`} />,
      },
      {
        path: "/faq",
        element: <Navigate to={`/${locale}/faq`} />,
      },
    ];
    SupportedLocales.forEach((locale: string) => {
      res.push({
        path: `/${locale}`,
        element: (
          <Home
            onLanguageChange={(value) => {
              setLocale(value);
            }}
          />
        ),
      });
      res.push({
        path: `/${locale}/editor`,
        element: <Editor />,
      });
    });
    return res;
  }, [locale]);
  console.log("cur locale", locale);

  const router = createBrowserRouter(routes);
  // Create language-specific route paths

  return (
    <IntlProvider messages={messages[locale as keyof typeof messages]} locale={locale} defaultLocale={defaultLocale}>
      <RouterProvider router={router} />
    </IntlProvider>
  );
}

export default App;
