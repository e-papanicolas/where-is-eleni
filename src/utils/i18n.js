import elHome from "../content/el/home.json";
import enHome from "../content/en/home.json";

const content = {
  en: {
    home: enHome,
  },
  el: {
    home: elHome,
  },
};

export const getContent = (lang, page) => content[lang][page];
