import type { Metadata } from "next";
import Link from "next/link";
import { allBlogs } from "contentlayer/generated";
import ViewsCounter from "@/components/ViewsCounter";
import { Suspense } from "react";
import { getViewsCount } from "../db/queries";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

export default function BlogPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">read my blog</h1>
      {allBlogs
        .filter((post) => !post.hidden)
        .sort((a, b) => {
          if (new Date(a.date) > new Date(b.date)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="group mb-4 flex flex-col"
            href={`/blog/${post.slug}`}
          >
            <p className="tracking-tight text-neutral-900 transition-colors group-hover:text-neutral-500 dark:text-neutral-100 dark:group-hover:text-neutral-400">
              {post.title}
            </p>
            <Suspense fallback={<p className="h-5" />}>
              <Views slug={post.slug} />
            </Suspense>
          </Link>
        ))}
    </section>
  );
}

async function Views({ slug }: { slug: string }) {
  let views = "0";
  try {
    views = await getViewsCount(slug);
  } catch {}

  return <ViewsCounter views={views} />;
}
