import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
}

const SITE_NAME = "Joy Plus";
const DEFAULT_TITLE = "Joy Plus - Find Your Perfect Travel Companion";
const DEFAULT_DESCRIPTION = "Connect with like-minded travelers and transform solo adventures into shared experiences. Join Joy Plus to find your perfect travel companion today.";
const DEFAULT_IMAGE = "https://joyplustravelapp.com/icon-512x512.png";
const BASE_URL = "https://joyplustravelapp.com";

const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  type = "website",
}: SEOProps) => {
  const { pathname } = useLocation();
  const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
  const url = `${BASE_URL}${pathname}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
