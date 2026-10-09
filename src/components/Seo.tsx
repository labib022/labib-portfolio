import { useEffect } from "react";
import { site } from "../data/site";

export function Seo() {
  const title = `${site.displayName}${site.brandSuffix} | ${site.title}`;
  const publicOrigin = (site.siteUrl || window.location.origin).replace(/\/$/, "");
  useEffect(() => { document.title = title; }, [title]);
  return (
    <>
      <meta name="description" content={site.description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={site.description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={`${site.displayName}${site.brandSuffix}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:image" content={`${publicOrigin}${site.profileImage}`} />
      <meta property="og:image:alt" content={`${site.displayName}, a full stack developer from Dhaka`} />
      {site.siteUrl && <>
        <link rel="canonical" href={site.siteUrl} />
        <meta property="og:url" content={site.siteUrl} />
      </>}
    </>
  );
}