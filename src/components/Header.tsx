import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.png";
import { useIntl } from "react-intl";
import { website_url, github_url, APP_NAME } from "../utils/constants";
import LanguageSwitcher from "./LanguageSwitcher";
const Header = () => {
  const intl = useIntl();
  const tweetText = encodeURIComponent(`${intl.formatMessage({ id: "twitter_share_text" }, { weburl: website_url })}`);

  return (
    <div className="bg-white text-xl md:px-2 flex  border-dashed border-b-2 border-gray-100 p-2">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="logo" className="w-8 h-8 mx-4" />
        <h1 className="font-semibold">{APP_NAME}</h1>
      </Link>

      <div className="ml-auto md:mr-4 flex items-center ">
        <LanguageSwitcher />
        {/* <Link to="/faq" className="text-gray-700 hover:text-gray-800 text-base font-Nunito mx-4"><span className="hidden md:inline-block">How to use</span></Link> */}
        <a
          href={github_url}
          target="_blank"
          rel="noreferrer"
          className="bg-gray-700 hover:bg-gray-800 px-4 rounded-full p-1 text-white md:text-sm md:flex hidden items-center text-xs mx-2 font-Nunito"
        >
          {intl.formatMessage({ id: "star_on_github" })}
        </a>
        <a
          href={`https://x.com/intent/tweet?text=${tweetText}`}
          className="mx-2 bg-blue-400 hover:bg-blue-500 md:text-sm text-xs rounded-full px-4 font-semibold text-white p-1"
        >
          {intl.formatMessage({ id: "share_on_twitter" })}
        </a>
      </div>
    </div>
  );
};

export default Header;
