"use client";

import { Suspense } from "react";
import Link from "next/link";
import { ModeToggle } from "./theme-toggle";

const navItems = {
  "/": {
    name: "home",
  },
  "/work": {
    name: "work",
  },
  "/blog": {
    name: "blog",
  },
  "/speaking": {
    name: "speaking",
  },
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav className="flex justify-between relative px-0 pb-0 fade md:overflow-auto md:relative">
          <div className="flex flex-row">
            <Suspense fallback={null}>
              {Object.entries(navItems).map(([path, { name }]) => {
                return <NavItem key={path} path={path} name={name} />;
              })}
            </Suspense>
          </div>
          <ModeToggle />
        </nav>
      </div>
    </aside>
  );
}

function NavItem({ path, name }: { path: string; name: string }) {
  return (
    <Link
      key={path}
      href={path}
      className={
        "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle"
      }
    >
      <span className="relative py-1 px-2">{name}</span>
    </Link>
  );
}
