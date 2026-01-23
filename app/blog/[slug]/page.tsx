import ViewsCounter from "@/components/ViewsCounter";
import formatDate from "@/utils/formatDate";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense, cache } from "react";
import { increment } from "../../db/actions";
import { getViewsCount } from "../../db/queries";
import { compileMDX } from "next-mdx-remote/rsc";
import Tweet from "@/components/tweet";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const components = {
  Tweet,
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return;
  }

  const { title, date, summary, image } = post;
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
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: summary,
      images: [ogImage],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { content } = await compileMDX({
    source: post.content,
    components,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [rehypePrettyCode, { theme: "one-dark-pro" }],
          [rehypeAutolinkHeadings, { properties: { className: ["anchor"] } }],
        ],
      },
    },
  });

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
        {content}
      </article>
    </section>
  );
}

const incrementView = cache(increment);

async function Views({ slug }: { slug: string }) {
  let views = "0";

  try {
    views = await getViewsCount(slug);
    incrementView(slug);
  } catch {}

  return <ViewsCounter views={views} />;
}
