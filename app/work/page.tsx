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
          I started programming when I was 14, after learning programming for 7
          months I joined first company, now I{"'"}m developer for over 3 years,
          in every company I worked in I was the youngest on board. People very
          often ask me why I started so young, my answer to this is by starting
          young I had nothing to loose (still don{"'"}t have), but I can try
          working with very talented, smart people and learn from them very
          early which allows me to build awesome things that people love.
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
          React Native Developer
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
          blog posts & guides. Also as part of my job I{"'"}m experimenting and
          validating new concepts, e.g. React Server Components in React Native
          etc.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <Link
          href={"https://mymusic.pl"}
          target={"_blank"}
          className="not-prose no-underline"
        >
          <h2 className="mb-1 text-xl font-medium tracking-tighter">MyMusic</h2>
        </Link>
        <p className="not-prose text-sm text-neutral-600 dark:text-neutral-400">
          React Native Developer, Sep 2021 - Nov 2022
        </p>
        <p>
          MyMusic is the biggest independent Polish music company specializes in
          publishing and distributing work by top Polish artists. Founded over
          20 years, it is dedicated to advancing and promoting music in Poland.
          I was mainly working on development{" "}
          <Link href="https://mugo.pl" target={"_blank"}>
            MUGO
          </Link>{" "}
          which is a platform that allows artists to publish songs to all
          popular platform e.g. Spotify, Tidal, iTunes with just few clicks.
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
          between parents and the institution.
        </p>
      </div>
    </section>
  );
}
