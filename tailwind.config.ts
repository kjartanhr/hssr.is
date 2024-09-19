import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Plus Jakarta Sans", "sans-serif"],
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "hsl(45, 100%, 62%)",
                "primary-light": "hsl(45, 100%, 72%)",
                secondary: "hsl(157, 100%, 26%)",
                "secondary-dark": "hsl(157, 100%, 20%)",
            },
        },
    },
    plugins: [],
};
export default config;
