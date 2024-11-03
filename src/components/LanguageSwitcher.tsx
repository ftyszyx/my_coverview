import { useIntl } from "react-intl";
import { SupportedLocales } from "@/lang/index";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "@/model/app.store";

const LanguageSwitcher = () => {
  const setLanguage = useAppStore((state) => state.setLanguage);
  const intl = useIntl();
  const goto = useNavigate();

  return (
    <select
      value={intl.locale}
      onChange={(e) => {
        goto("/", { replace: true });
        setLanguage(e.target.value);
      }}
      className="bg-gray-700 text-white rounded-md px-2 py-1"
    >
      {SupportedLocales.map((locale: string) => (
        <option key={locale} value={locale}>
          {intl.formatMessage({ id: `language.${locale}` })}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
