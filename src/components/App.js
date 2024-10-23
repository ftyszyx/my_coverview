import React, { useMemo, useState } from "react";
import { IntlProvider } from "react-intl";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { messages, defaultLocale, SupportedLocales } from "../lang";
import Home from "./Home";
import Editor from "./Editor";
import Faq from "./Faq";

function App() {
  const [locale, setLocale] = useState(defaultLocale);
  const routes = useMemo(() => {
    let res = [
      {
        path: "/",
        element: <Navigate to={`/${locale}`} />,
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
    SupportedLocales.forEach((locale) => {
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
      res.push({
        path: `/${locale}/faq`,
        element: <Faq />,
      });
    });
    return res;
  }, [locale]);
  console.log("cur locale", locale);

  const router = createBrowserRouter(routes);
  // Create language-specific route paths

  return (
    <IntlProvider messages={messages[locale]} locale={locale} defaultLocale={defaultLocale}>
      <RouterProvider router={router} />
    </IntlProvider>
  );
}

export default App;
