import formatDate from "@/utils/formatDate";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Talks",
  description: "A list of live demos, interviews and talks I did in the past.",
};

type Entry = {
  id: number;
  name: string;
  date: string;
  place: string;
  link: string;
};

const data: Entry[] = [
  {
    id: 3,
    name: "Bringing React Server Components to React Native",
    date: "12.09.2023",
    link: "https://portal.gitnation.org/contents/brining-react-server-components-to-react-native",
    place: "React Day Berlin",
  },
  {
    id: 2,
    name: "Introducing E2E tests to React Native core",
    date: "08.24.2023",
    link: "https://www.youtube.com/watch?v=BRHrkd0J62o",
    place: "The React Native Show Podcast #26",
  },
  {
    id: 1,
    name: "Callstack's recap of App.js and Chain React 2023",
    date: "05.31.2023",
    link: "https://www.youtube.com/watch?v=3J16kF8Z_4U",
    place: "The React Native Show Podcast #11",
  },
];

export default function TalksPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        live demos, interviews, and talks.
      </h1>

      {data.map((item) => {
        const year = new Date(item.date).getFullYear();

        const sameYear = data.filter(({ date }) => {
          const dateYear = new Date(date).getFullYear();
          return dateYear === year;
        });

        const sorted = sameYear.sort(({ date: first }, { date: second }) => {
          let firstDate = new Date(first).getTime();
          let secondDate = new Date(second).getTime();

          return secondDate - firstDate;
        });

        return (
          <Talk key={item.id} showYear={item.id === sorted[0].id} {...item} />
        );
      })}
    </section>
  );
}

function Talk({
  name,
  date,
  place,
  link,
  showYear,
}: Entry & { showYear: boolean }) {
  return (
    <div className="relative flex flex-row">
      {showYear && (
        <div className="position absolute -left-14 hidden text-neutral-500 lg:block">
          {new Date(date).getFullYear()}
        </div>
      )}

      <Link href={link} target={"_blank"}>
        <div className="group mb-5">
          <div className="flex flex-row">
            <p>{name}</p>
            <div className="align-center transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
              <ArrowUpRight className="pt-1" size={18} />
            </div>
          </div>
          <p className="flex flex-row space-x-1 text-xs text-neutral-500 sm:text-base">
            <span className="whitespace-nowrap">{formatDate(date, false)}</span>
            <span>|</span>
            <span className="text-es underline underline-offset-4">
              {place}
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
}
