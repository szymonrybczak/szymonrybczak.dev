import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description: "A summary of my work and contributions.",
};

export default function WorkPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">my work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I started programming when I was 14. After learning programming for 7
          months, I joined first company. Now, I{"'"}ve been a developer for
          over 3 years. In every company I have worked in I was the youngest on
          board. People often ask me why I started so young, my answer to this
          is that by starting young, I had nothing to lose (still don{"'"}t
          have), but it allowed me to work with very talented, smart people and
          learn from them very early which has enabled me to build awesome
          things that people love.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <Link
          href={"https://callstack.com"}
          target={"_blank"}
          className="not-prose no-underline"
        >
          <h2 className="mb-1 text-xl font-medium tracking-tighter">
            Callstack
          </h2>
        </Link>
        <p className="not-prose text-sm text-neutral-600 dark:text-neutral-400">
          React Native Developer, Nov 2022 - Present
        </p>
        <p>
          Callstack is Software Engineering Consultancy that specializes in
          developing high-performing cross-platform apps using the React & React
          Native tech stack. I{"'"}m mainly involved in R&D and Open Source
          initiatives on behalf that I{"'"}m maintaining{" "}
          <Link
            href={"https://github.com/react-native-community/cli"}
            target={"_blank"}
          >
            React Native Community CLI
          </Link>
          , and I{"'"}m working on a technical content, such as: newsletters,
          blog posts, and guides. Additionally, as part of my job, I experiment
          with and validate new concepts, such as React Server Components in
          React Native, etc.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <Link
          href={"https://mymusic.pl/index.html"}
          target={"_blank"}
          className="not-prose no-underline"
        >
          <h2 className="mb-1 text-xl font-medium tracking-tighter">MyMusic</h2>
        </Link>
        <p className="not-prose text-sm text-neutral-600 dark:text-neutral-400">
          React Native Developer, Sep 2021 - Nov 2022
        </p>
        <p>
          MyMusic is the largest independent Polish music company specializing
          in publishing and distributing the work of top Polish artists. Founded
          over 20 years ago, it is dedicated to advancing and promoting music in
          Poland. I mainly worked on development{" "}
          <Link href="https://mugo.pl" target={"_blank"}>
            MUGO
          </Link>{" "}
          which is a platform that allows artists to publish songs on popular
          platforms such as Spotify, Tidal, and iTunes with just a few clicks.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <div>
          <Link
            href={"https://livekid.com"}
            target={"_blank"}
            className="no-underline"
          >
            <h2 className="not-prose mb-1 text-xl font-medium tracking-tighter">
              LiveKid
            </h2>
          </Link>
        </div>
        <p className="not-prose text-sm text-neutral-600 dark:text-neutral-400">
          iOS Developer, March 2021 - Sep 2021
        </p>
        <p>
          LiveKid is an innovative Polish SaaS startup that offers a platform
          for kindergartens and nurseries, enabling quick and efficient contact
          between parents and the institution. My main goal was to support the
          development of the{" "}
          <Link
            href={"https://apps.apple.com/pl/app/livekid/id1436616910"}
            target={"_blank"}
          >
            main mobile app
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
