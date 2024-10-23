import React from "react";
import { useIntl } from "react-intl";
import { SupportedLocales } from "../lang";
import { useNavigate } from "react-router-dom";

const LanguageSwitcher = ({ onLanguageChange }) => {
  const intl = useIntl();
  const goto = useNavigate();

  return (
    <select
      value={intl.locale}
      onChange={(e) => {
        goto("/", { replace: true });
        onLanguageChange(e.target.value);
      }}
      className="bg-gray-700 text-white rounded-md px-2 py-1"
    >
      {SupportedLocales.map((locale) => (
        <option key={locale} value={locale}>
          {intl.formatMessage({ id: `language.${locale}` })}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
