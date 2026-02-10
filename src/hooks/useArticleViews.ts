import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export function useIncrementView(slug: string | undefined) {
  const [viewCount, setViewCount] = useState<number | null>(null);

  useEffect(() => {
    if (!slug) return;
    supabase.rpc("increment_view_count", { article_slug: slug }).then(({ data }) => {
      if (typeof data === "number") setViewCount(data);
    });
  }, [slug]);

  return viewCount;
}

export function useArticleViewCounts() {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    supabase
      .from("article_views")
      .select("slug, view_count")
      .then(({ data }) => {
        if (data) {
          const map: Record<string, number> = {};
          data.forEach((r) => (map[r.slug] = r.view_count));
          setCounts(map);
        }
      });
  }, []);

  return counts;
}
