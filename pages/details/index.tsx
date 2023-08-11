import Link from "next-multilingual/link";
import { useMessages } from "next-multilingual/messages";

export default function Details() {
  const messages = useMessages();

  return (
    <div>
      <Link href="/">{messages.format("mainPage")}</Link>
    </div>
  );
}
