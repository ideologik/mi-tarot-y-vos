//import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // VitePWA({
    //   registerType: "autoUpdate",
    //   includeAssets: ["favicon-new.ico", "robots.txt", "apple-touch-icon.png"],
    //   manifest: {
    //     name: "Mi Tarot y Vos",
    //     short_name: "MiTarot",
    //     description: "Calculadora mágica de cartas regentes, desafío y ciclo",
    //     theme_color: "#c2933f",
    //     background_color: "#f4e3c3",
    //     display: "standalone",
    //     orientation: "portrait",
    //     start_url: "/",
    //     icons: [
    //       {
    //         src: "/mtvicon.ico",
    //         sizes: "48x48",
    //         type: "image/x-icon",
    //       },
    //       {
    //         src: "/mtvicon.ico",
    //         sizes: "512x512",
    //         type: "image/jpeg",
    //       },
    //     ],
    //   },
    // }),
  ],
});
