import { getRequestConfig } from "next-intl/server";
import { locales, defaultLocale } from "../src/i18n";

export default getRequestConfig(async ({ locale }) => {
  if (!locale || !locales.includes(locale as any)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
