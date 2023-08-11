import { normalizeLocale, setCookieLocale } from "next-multilingual";
import Link from "next-multilingual/link";
import { KeyValueObject } from "next-multilingual/messages";
import { useRouter } from "next-multilingual/router";
import { getLanguageSwitcherUrl } from "next-multilingual/url";

const localeStrings = {
  "ar-SA": "سرد بالعربي",
  "en-US": "Sard in English",
  "fr-CA": "Sard en français",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { locale: currentLocale, locales } = router;
  const href = getLanguageSwitcherUrl(router, undefined);

  return (
    <div className="p-6 flex flex-col gap-8">
      {children}
      <div className="flex flex-col gap-4">
        <p>Current Locale is: {currentLocale}</p>
        <div className="flex gap-6">
          {locales
            .filter((locale) => locale !== currentLocale)
            .map((locale) => {
              const normalizedLocale = normalizeLocale(locale);
              return (
                <Link
                  key={locale}
                  href={href}
                  locale={locale}
                  localizedRouteParameters={undefined}
                  data-cy="language-switcher-link"
                  onClick={() => {
                    setCookieLocale(locale);
                  }}
                  lang={normalizedLocale}
                  hrefLang={normalizedLocale}
                >
                  {(localeStrings as KeyValueObject)[normalizedLocale]}
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}
