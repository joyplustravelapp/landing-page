
-- Create table to track article view counts
CREATE TABLE public.article_views (
  slug TEXT PRIMARY KEY,
  view_count BIGINT NOT NULL DEFAULT 0
);

-- Enable RLS
ALTER TABLE public.article_views ENABLE ROW LEVEL SECURITY;

-- Anyone can read view counts (public data)
CREATE POLICY "Anyone can read view counts"
  ON public.article_views FOR SELECT
  USING (true);

-- Anyone can insert (for first view of an article)
CREATE POLICY "Anyone can insert view counts"
  ON public.article_views FOR INSERT
  WITH CHECK (true);

-- Anyone can update view counts (increment)
CREATE POLICY "Anyone can update view counts"
  ON public.article_views FOR UPDATE
  USING (true);

-- Function to increment view count atomically
CREATE OR REPLACE FUNCTION public.increment_view_count(article_slug TEXT)
RETURNS BIGINT
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  new_count BIGINT;
BEGIN
  INSERT INTO public.article_views (slug, view_count)
  VALUES (article_slug, 1)
  ON CONFLICT (slug)
  DO UPDATE SET view_count = article_views.view_count + 1
  RETURNING view_count INTO new_count;
  RETURN new_count;
END;
$$;
