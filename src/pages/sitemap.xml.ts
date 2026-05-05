import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
	if (!site) {
		return new Response("Sitemap not configured", {
			status: 503,
			headers: { "Content-Type": "text/plain; charset=utf-8" },
		});
	}

	const home = new URL("/", site).href;
	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<url>
		<loc>${home}</loc>
		<changefreq>monthly</changefreq>
		<priority>1.0</priority>
	</url>
</urlset>`;

	return new Response(xml, {
		headers: { "Content-Type": "application/xml; charset=utf-8" },
	});
};
