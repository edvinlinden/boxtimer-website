import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://boxtimer.app/",
  integrations: [sitemap()],
  redirects: {
    "/2024-best-workout-timers-iphone/":
      "/2026-best-workout-timers-iphone/",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
