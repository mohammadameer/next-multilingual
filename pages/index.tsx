import type { GetServerSideProps, NextPage } from "next";
import {
  ResolvedLocaleServerSideProps,
  resolveLocale,
  useResolvedLocale,
} from "next-multilingual";
import Link from "next-multilingual/link";
import { useMessages } from "next-multilingual/messages";
import { useRouter } from "next-multilingual/router";

const Homepage: NextPage<ResolvedLocaleServerSideProps> = ({
  resolvedLocale,
}) => {
  // Force Next.js to use a locale that was resolved dynamically on the homepage (this must be the first action on the homepage).
  useResolvedLocale(resolvedLocale);
  const { locale: currentLocale, locales } = useRouter();

  const messages = useMessages();

  return (
    <div>
      <Link href="/details">{messages.format("detailsPage")}</Link>
    </div>
  );
};

export default Homepage;

export const getServerSideProps: GetServerSideProps<
  ResolvedLocaleServerSideProps
> = async (context) => {
  return {
    props: {
      resolvedLocale: resolveLocale(context),
    },
  };
};
