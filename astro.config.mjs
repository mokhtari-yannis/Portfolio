// @ts-check
import { defineConfig } from 'astro/config';
import icon from "astro-icon";


import tailwind from "@astrojs/tailwind";


// // https://astro.build/config
export default defineConfig({
    integrations: [icon(), /*tailwind()*/],
    site: 'https://Mokhtariyannis.portfolio.github.io',
    base: import.meta.env.PUBLIC_BASE_URL, 
});