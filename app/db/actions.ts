import { unstable_noStore as noStore } from "next/cache";
import { getSupabase } from "./supabase";

export async function increment(slug: string) {
  noStore();

  const { error } = await getSupabase().rpc("increment_views", {
    slug_text: slug,
  });

  if (error) {
    console.error("Error incrementing views:", error);
  }
}
