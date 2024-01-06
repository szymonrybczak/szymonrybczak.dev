import { unstable_noStore as noStore } from "next/cache";
import { sql } from "@vercel/postgres";
import { z } from "zod";

export async function getViewsCount(slug: string) {
  noStore();
  let data = await sql`
    SELECT count
    FROM views
    WHERE slug = ${slug}
  `;

  const schema = z.object({
    count: z.number(),
  });

  const parse = schema.safeParse(data.rows[0]);

  if (!parse.success) {
    return "";
  }

  const { count } = parse.data;

  return count.toLocaleString();
}
