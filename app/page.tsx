import Link from "next/link";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Szymon Rybczak
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Co-founder & CEO of{" "}
          <Link href="https://tester.army" target="_blank">
            TesterArmy
          </Link>{" "}
          (YC P26). Right now I{"'"}m fully focused on building the future of
          agentic testing for web & mobile.
        </p>
        <p>
          Youngest ever contributor to React Native (at 16). I maintained
          open-source libraries with 2M+ weekly downloads, including{" "}
          <Link
            href="https://github.com/react-native-community/cli"
            target="_blank"
          >
            React Native Community CLI
          </Link>{" "}
          and{" "}
          <Link href="https://github.com/callstackincubator/ai" target="_blank">
            react-native-ai
          </Link>
          .
        </p>
        <p>
          5+ years of commercial experience. Previously I spent 3 years at{" "}
          <Link href="https://callstack.com/" target="_blank">
            Callstack
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
