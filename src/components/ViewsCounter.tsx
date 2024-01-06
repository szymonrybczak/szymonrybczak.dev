export default function ViewsCounter({ views }: { views: string }) {
  if (views === "") return null;

  return (
    <p className="text-neutral-600 dark:text-neutral-400">{`${views} views`}</p>
  );
}
