const SITE = "https://boxtimer.app";

function filePathToUrl(filePath: string): string {
  let path = filePath.replace(/^\.\//, "").replace(/\.astro$/, "");
  if (path === "index") return `${SITE}/`;
  if (path.endsWith("/index")) path = path.slice(0, -"/index".length);
  return `${SITE}/${path}/`;
}

export async function GET() {
  const pages = import.meta.glob<{ lastmod?: string }>("./**/*.astro", {
    eager: true,
  });

  const entries = Object.entries(pages)
    .map(([filePath, mod]) => ({
      url: filePathToUrl(filePath),
      lastmod: mod.lastmod,
    }))
    .sort((a, b) => a.url.localeCompare(b.url));

  const urlTags = entries
    .map(({ url, lastmod }) =>
      lastmod
        ? `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`
        : `  <url>\n    <loc>${url}</loc>\n  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${urlTags}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
