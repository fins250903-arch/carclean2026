import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
