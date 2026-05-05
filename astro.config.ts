import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

const siteOrigin =
	import.meta.env.PUBLIC_SITE_URL?.replace(/\/$/, "") ||
	"https://aidenliamframeprotection.ca";

export default defineConfig({
	site: siteOrigin,
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				"~": "/src",
			},
		},
	},
});
