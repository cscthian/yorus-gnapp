import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  integrations: [tailwind(), icon(), vue()]
});