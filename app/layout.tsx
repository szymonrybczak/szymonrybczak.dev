import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/nav";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Szymon Rybczak",
  description: "17 yo React Native Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system">
          <main
            className={cn(
              "mx-4 mb-40 mt-8 flex min-w-0 max-w-2xl flex-auto flex-col px-2 md:px-0 lg:mx-auto",
              GeistSans.variable,
              GeistMono.variable,
            )}
          >
            <Navbar />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
