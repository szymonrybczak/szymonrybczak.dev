import { notFound } from "next/navigation";
import { getBlogPosts } from "../../db/blog";
import { Suspense, cache } from "react";
import formatDate from "@/utils/formatDate";
import { getViewsCount } from "../../db/queries";
import ViewsCounter from "@/components/ViewsCounter";
import { increment } from "../../db/actions";

export default async function Blog({ params }: { params: { slug: string } }) {
  let post = getBlogPosts().find(({ slug }) => slug === params.slug);

  if (!post) {
    notFound();
  }

  const {
    slug,
    content,
    metadata: { title, publishedAt },
  } = post;

  return (
    <div>
      <h1 className="title max-w-[650px] text-2xl font-medium tracking-tighter">
        {title}
      </h1>
      <div className="mb-8 mt-2 flex max-w-[650px] items-center justify-between text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(publishedAt)}
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
