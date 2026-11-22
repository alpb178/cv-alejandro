/** Public address the CV is served at. Canonical, sitemap, robots, Open Graph
 * and structured data all derive from it, so it must match the live domain. */
export const SITE_URL = "https://alejandro-perez.corpsc.com";
export const SITE_HOST = new URL(SITE_URL).host;
