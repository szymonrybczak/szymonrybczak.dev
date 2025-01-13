import { unstable_noStore as noStore } from "next/cache";
import { supabase } from "./supabase";

export async function getViewsCount(slug: string) {
  noStore();

  const { data, error } = await supabase
    .from("views")
    .select("count")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("Error fetching views:", error);
    return "0";
  }

  return data?.count?.toString() || "0";
}
