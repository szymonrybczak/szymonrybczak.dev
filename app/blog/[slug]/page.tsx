import ViewsCounter from "@/components/ViewsCounter";
import formatDate from "@/utils/formatDate";
import { allBlogs } from "contentlayer/generated";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense, cache } from "react";
import { increment } from "../../db/actions";
import { getViewsCount } from "../../db/queries";
import { useMDXComponent } from "next-contentlayer/hooks";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = allBlogs.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const { title, date, summary, image, slug } = post;
  const ogImage = image
    ? `https://szymonrybczak.dev/${image}`
    : `https://szymonrybczak.dev/og?title=${title}&date=${formatDate(
        date,
        false,
      )}`;

  return {
    title,
    description: summary,
    openGraph: {
      title,
      description: summary,
      type: "article",
      publishedTime: date,
      url: `https://szymonrybczak.dev/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: summary,
      images: [ogImage],
    },
  };
}

export default function Blog({ params }: { params: { slug: string } }) {
  const post = allBlogs.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const Component = useMDXComponent(post.body.code);

  return (
    <section>
      <h1 className="max-w-[650px] text-2xl font-semibold tracking-tighter">
        {post.title}
      </h1>
      <div className="mb-8 mt-2 flex max-w-[650px] items-center justify-between text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.date)}
        </p>
        <Suspense fallback={<p className="h-5" />}>
          <Views slug={post.slug} />
        </Suspense>
      </div>
      <article className="prose-quoteless prose prose-neutral dark:prose-invert">
        <Component />
      </article>
    </section>
  );
}

const incrementView = cache(increment);

async function Views({ slug }: { slug: string }) {
  let views = await getViewsCount(slug);
  incrementView(slug);

  return <ViewsCounter views={views} />;
}
