import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#0066CC", // Bright Blue
                    dark: "#004C99",
                },
                accent: {
                    DEFAULT: "#FF6600", // Orange
                    hover: "#CC5200",
                },
            },
            fontFamily: {
                sans: ['var(--font-noto-sans-jp)'],
            },
        },
    },
    plugins: [],
};
export default config;
