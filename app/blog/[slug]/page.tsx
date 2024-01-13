import { notFound } from "next/navigation";
import { getBlogPosts } from "../../db/blog";
import { Suspense, cache } from "react";
import formatDate from "@/utils/formatDate";
import { getViewsCount } from "../../db/queries";
import ViewsCounter from "@/components/ViewsCounter";
import { increment } from "../../db/actions";
import Link from "next/link";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata | undefined> {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? `https://szymonrybczak.dev/${image}`
    : `https://szymonrybczak.dev/og?title=${title}&date=${formatDate(
        publishedTime,
        false,
      )}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://szymonrybcza.dev/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Blog({ params }: { params: { slug: string } }) {
  let post = getBlogPosts().find(({ slug }) => slug === params.slug);

  if (!post) {
    notFound();
  }

  const {
    slug,
    metadata: { title, publishedAt },
  } = post;

  return (
    <div>
      <h1 className="title max-w-[650px] text-2xl font-medium tracking-tighter">
        {title}
      </h1>
      <div className="mb-8 mt-2 flex max-w-[650px] items-center justify-between text-sm">
        <p className="display flex text-sm text-neutral-600 dark:text-neutral-400">
          <span className="hidden sm:block">
            <Link href={"https://twitter.com/SzymonRybczak"} target="_blank">
              @szymonrybczak
            </Link>
            {" | "}
          </span>
          <span className="pl-1">{formatDate(publishedAt)}</span>
        </p>
        <Suspense fallback={<p className="h-5" />}>
          <Views slug={slug} />
        </Suspense>
      </div>
    </div>
  );
}

const incrementView = cache(increment);

const Views = async ({ slug }: { slug: string }) => {
  let views = await getViewsCount(slug);
  incrementView(slug);

  return <ViewsCounter views={views} />;
};
