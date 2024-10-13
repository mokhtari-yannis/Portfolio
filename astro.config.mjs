import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import dotenv from 'dotenv';

// Charger le bon fichier d'environnement en fonction du mode
if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: '.env.production' });  // Production
  console.log("En mode production, base URL :", process.env.PUBLIC_BASE_URL);
} else {
  dotenv.config({ path: '.env' });  // Développement
  console.log("En mode développement, base URL :", process.env.PUBLIC_BASE_URL);
}

// // https://astro.build/config
export default defineConfig({
    integrations: [icon(), /*tailwind()*/],
    output: 'static',
    site: 'https://Mokhtariyannis.portfolio.github.io',
    base: process.env.PUBLIC_BASE_URL || '/',  // Utilisation de PUBLIC_BASE_URL avec fallback
});
