import { useIntl } from "react-intl";
import { SupportedLocales } from "@/lang/index";
import { useNavigate } from "react-router-dom";

interface LanguageSwitcherProps {
  onLanguageChange: (lang: string) => void;
}

const LanguageSwitcher = ({ onLanguageChange }: LanguageSwitcherProps) => {
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
      {SupportedLocales.map((locale: string) => (
        <option key={locale} value={locale}>
          {intl.formatMessage({ id: `language.${locale}` })}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
