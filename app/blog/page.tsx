import Link from "next/link";
import { getBlogPosts } from "../db/blog";
import { Suspense } from "react";
import { getViewsCount } from "../db/queries";
import ViewsCounter from "@/components/ViewsCounter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Posts about React & React Native ecosystem.",
};

export default function Blog() {
  let allBlogs = getBlogPosts();

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        read my blog
      </h1>
      {allBlogs
        .sort((a, b) => {
          return new Date(a.metadata.publishedAt) >
            new Date(b.metadata.publishedAt)
            ? -1
            : 1;
        })
        .map(({ slug, metadata: { title } }) => (
          <Link
            key={slug}
            className="mb-4 flex flex-col space-y-1"
            href={`/blog/${slug}`}
          >
            <div className="flex w-full flex-col">
              <p className="tracking-tight text-neutral-900 dark:text-neutral-100">
                {title}
              </p>
              <Suspense fallback={<p className="h-6" />}>
                <Views slug={slug} />
              </Suspense>
            </div>
          </Link>
        ))}
    </section>
  );
}

const Views = async ({ slug }: { slug: string }) => {
  let views = await getViewsCount(slug);

  return <ViewsCounter views={views} />;
};
