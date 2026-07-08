import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get("title");
  const postPublishDate = searchParams.get("date");
  // Temporary design exploration switch, remove once a variant is picked.
  const variant = searchParams.get("v") || "a";

  const [sansData, monoData] = await Promise.all([
    fetch(
      new URL("../../public/fonts/Geist-SemiBold.otf", import.meta.url),
    ).then((res) => res.arrayBuffer()),
    fetch(
      new URL("../../public/fonts/GeistMono-Regular.otf", import.meta.url),
    ).then((res) => res.arrayBuffer()),
  ]);

  const title = postTitle ?? "Szymon Rybczak";
  const subtitle = postTitle
    ? ["by Szymon Rybczak", postPublishDate].filter(Boolean).join(" · ")
    : "co-founder & ceo of TesterArmy";
  const fontSize = title.length <= 20 ? 88 : title.length <= 45 ? 68 : 56;

  const light = variant === "a" || variant === "b" || variant === "d";
  const bg = light ? "#ffffff" : "#100F0F";
  const fg = light ? "#100F0F" : "#f8fafc";
  const mutedFg = light ? "#737373" : "#a1a1aa";

  const titleEl = (
    <div
      style={{
        display: "block",
        fontFamily: "Geist",
        fontSize,
        color: fg,
        letterSpacing: "-0.02em",
        lineHeight: 1.1,
        lineClamp: 3,
      }}
    >
      {title}
    </div>
  );

  const subtitleEl = (size: number) => (
    <div
      style={{
        display: "flex",
        fontFamily: "Geist Mono",
        fontSize: size,
        color: mutedFg,
      }}
    >
      {subtitle}
    </div>
  );

  let content;
  if (variant === "b" || variant === "c") {
    // Poster: url pinned top-left, title anchored at the bottom.
    content = (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: bg,
          padding: "64px 72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "Geist Mono",
            fontSize: 24,
            color: mutedFg,
          }}
        >
          by Szymon Rybczak
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {titleEl}
          <div style={{ display: "flex", marginTop: 20 }}>
            {subtitleEl(24)}
          </div>
        </div>
      </div>
    );
  } else if (variant === "d") {
    // Hairline frame inset from the canvas edge.
    content = (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          backgroundColor: bg,
          padding: 40,
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            border: "1px solid #e4e4e7",
            padding: "0 64px",
          }}
        >
          {titleEl}
          <div style={{ display: "flex", marginTop: 24 }}>
            {subtitleEl(26)}
          </div>
        </div>
      </div>
    );
  } else {
    // Centered-left, mirrors the site layout.
    content = (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: bg,
          padding: "0 80px",
        }}
      >
        {titleEl}
        <div style={{ display: "flex", marginTop: 28 }}>{subtitleEl(26)}</div>
      </div>
    );
  }

  return new ImageResponse(content, {
    width: 1200,
    height: 630,
    fonts: [
      { name: "Geist", data: sansData, style: "normal" },
      { name: "Geist Mono", data: monoData, style: "normal" },
    ],
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
