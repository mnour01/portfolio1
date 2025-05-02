// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

export default defineConfig({
  site: 'https://mnour01.github.io/portfolio1',
  base: '/portfolio1/',
  
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()]
});
