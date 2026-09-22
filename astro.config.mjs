import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://boxtimer.app/",
  redirects: {
    "/2024-best-workout-timers-iphone/":
      "/2026-best-workout-timers-iphone/",
    "/support/how-to-view-workout-history/": "/support/how-to-apply-a-preset/",
    "/support/how-to-pin-a-workout-in-history/": "/support/how-to-save-a-preset/",
    "/support/how-to-name-or-rename-a-workout/": "/support/how-to-save-a-preset/",
    "/support/how-to-reuse-settings-from-a-previous-workout/":
      "/support/how-to-apply-a-preset/",
    "/support/how-to-delete-a-workout-from-history/":
      "/support/how-to-delete-a-preset/",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
