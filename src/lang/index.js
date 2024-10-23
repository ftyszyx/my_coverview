import en_us from "./en-us.json";
import zh_cn from "./zh-cn.json";

export class LangItem {
  constructor(name, locale, lang_dic) {
    this.name = name;
    this.locale = locale;
    this.lang_dic = lang_dic;
  }

  getText(msg, ...args) {
    const res = this.lang_dic[msg];
    if (res == null) {
      console.error(`can't find lang text:${msg}`);
    }
    if (args.length > 0) {
      return res.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != "undefined" ? args[number] : match;
      });
    }
    return res;
  }
}

const Langs = [new LangItem("简体中文", "zh-cn", zh_cn), new LangItem("English", "en-us", en_us)];

export class LangHelper {
  static _lang = null;

  static setLang(locale) {
    locale = locale.toLowerCase();
    this._lang = Langs.find((item) => item.locale === locale);
  }

  static getString(msg, ...args) {
    return this._lang?.getText(msg, ...args);
  }

  static get lang() {
    return this._lang;
  }
}

export const messages = {
  "en-US": en_us,
  "zh-CN": zh_cn,
};

export const SupportedLocales = ["en-US", "zh-CN"];

export const defaultLocale = "en-US";
