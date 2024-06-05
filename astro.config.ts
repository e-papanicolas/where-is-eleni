import { defineConfig, passthroughImageService } from "astro/config";

import netlify from "@astrojs/netlify";
import qwik from "@qwikdev/astro";

// https://astro.build/config
export default defineConfig({
  output: "server",
  image: {
    service: passthroughImageService(),
  },
  integrations: [qwik({ include: ["**/components/**/*"] })],
  adapter: netlify(),
});
