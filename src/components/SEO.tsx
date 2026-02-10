import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  publishedDate?: string;
  modifiedDate?: string;
  noindex?: boolean;
}

const SITE_NAME = "Joy Plus";
const DEFAULT_TITLE = "Joy Plus - Find Your Perfect Travel Companion";
const DEFAULT_DESCRIPTION = "Connect with like-minded travelers and transform solo adventures into shared experiences. Join Joy Plus to find your perfect travel companion today.";
const DEFAULT_IMAGE = "https://joyplustravelapp.com/icon-512x512.png";
const BASE_URL = "https://joyplustravelapp.com";

const ensureAbsoluteUrl = (url: string): string => {
  if (url.startsWith("http")) return url;
  return `${BASE_URL}${url.startsWith("/") ? url : `/${url}`}`;
};

const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  type = "website",
  publishedDate,
  modifiedDate,
  noindex = false,
}: SEOProps) => {
  const { pathname } = useLocation();
  const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
  const url = `${BASE_URL}${pathname}`;
  const absoluteImage = ensureAbsoluteUrl(image);

  const jsonLd = type === "article" ? {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title || DEFAULT_TITLE,
    description,
    image: absoluteImage,
    url,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/icon-512x512.png`,
      },
    },
    ...(publishedDate && { datePublished: publishedDate }),
    ...(modifiedDate && { dateModified: modifiedDate }),
  } : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
