import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://boxtimer.app/",
  integrations: [
    tailwind({
      config: { path: "./tailwind.config.js" },
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
});
