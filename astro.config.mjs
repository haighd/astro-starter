// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://shiny-starship-1c625d.netlify.app/",
  integrations: [preact()]
});