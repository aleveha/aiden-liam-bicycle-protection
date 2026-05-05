import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

const env = loadEnv(import.meta.env.MODE, process.cwd(), "");

const siteOrigin =
	env.PUBLIC_SITE_URL?.replace(/\/$/, "") ||
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
	adapter: cloudflare(),
});
