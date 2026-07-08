"use client";

import { Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
const navItems = {
  "/": {
    name: "home",
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
    <aside className="mb-16 mt-8 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav className="relative flex items-center justify-between">
          <div className="-ml-2 flex flex-row font-mono text-sm">
            <Suspense fallback={null}>
              {Object.entries(navItems).map(([path, { name }]) => {
                return <NavItem key={path} path={path} name={name} />;
              })}
            </Suspense>
          </div>
          <div className="flex flex-row items-center gap-1 text-neutral-500 dark:text-neutral-400">
            <Link
              href={"https://x.com/SzymonRybczak"}
              target="_blank"
              aria-label="X (Twitter)"
              className="p-2 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="15"
                width="15"
                viewBox="0 0 512 512"
                className="fill-current"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </Link>
          </div>
        </nav>
      </div>
    </aside>
  );
}

function NavItem({ path, name }: { path: string; name: string }) {
  const pathname = usePathname();
  const isActive = path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <Link
      key={path}
      href={path}
      className={cn(
        "px-2 py-1 transition-colors",
        isActive
          ? "text-neutral-900 dark:text-neutral-100"
          : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100",
      )}
    >
      {name}
    </Link>
  );
}
