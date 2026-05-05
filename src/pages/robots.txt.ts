import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
	const lines = ["User-agent: *", "Allow: /", ""];

	if (site) {
		const sitemapUrl = new URL("sitemap.xml", site).href;
		lines.push(`Sitemap: ${sitemapUrl}`, "");
	}

	return new Response(lines.join("\n"), {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
};
