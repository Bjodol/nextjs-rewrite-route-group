import { cookies } from "next/dist/client/components/headers";
import Link from "next/link";

export default function Home() {
  const ssr = cookies().get("ssr")?.name ?? "Server side rendering";
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Currently on route group B!
      {ssr}
      <Link href="/a">Go to route group (a) with direct link</Link>
      <Link href="/a-rewrite?cake=banana" prefetch={false}>
        Go to route group (a) with rewritten link
      </Link>
    </main>
  );
}
