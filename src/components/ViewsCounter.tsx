export default function ViewsCounter({ views }: { views: string }) {
  if (views === "") return null;

  return (
    <p className="font-mono text-sm text-neutral-500 dark:text-neutral-500">{`${views} views`}</p>
  );
}
