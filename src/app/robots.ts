import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://cv.corpsc.com/sitemap.xml",
    host: "https://cv.corpsc.com",
  };
}
