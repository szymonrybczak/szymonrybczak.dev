import { unstable_noStore as noStore } from "next/cache";
import { supabase } from "./supabase";

export async function increment(slug: string) {
  noStore();

  const { error } = await supabase.rpc("increment_views", {
    slug_text: slug,
  });

  if (error) {
    console.error("Error incrementing views:", error);
  }
}
