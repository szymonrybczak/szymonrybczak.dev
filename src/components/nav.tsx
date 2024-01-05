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
  "/talks": {
    name: "talks",
  },
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-12 mt-8 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav className="fade relative flex justify-between px-0 pb-0 md:relative md:overflow-auto">
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
        "flex align-middle transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
      }
    >
      <span className="relative px-2 py-1">{name}</span>
    </Link>
  );
}
