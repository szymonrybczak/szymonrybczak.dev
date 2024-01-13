import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const postTitle = searchParams.get("title");
  const postPublishDate = searchParams.get("date");
  const font = fetch(
    new URL("../../public/fonts/Geist-SemiBold.otf", import.meta.url),
  ).then((res) => res.arrayBuffer());
  const fontData = await font;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundImage: "url(https://szymonrybczak.dev/og-bg.png)",
        }}
      >
        <div style={{ display: "flex", flex: 1 }}></div>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            marginBottom: 50,
          }}
        >
          <div
            style={{
              fontSize: 90,
              fontStyle: "normal",
              color: "white",
              lineHeight: "90px",
              padding: "100px",
              paddingBottom: "50px",
              display: "block",
              lineClamp: 2,
              boxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {postTitle}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 45,
              fontStyle: "normal",
              color: "#837877",
              lineHeight: "110px",
              paddingLeft: 100,
            }}
          >
            szymonrybczak.dev | {postPublishDate}
          </div>
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: "Geist",
          data: fontData,
          style: "normal",
        },
      ],
    },
  );
}
