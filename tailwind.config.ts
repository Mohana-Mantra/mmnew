import type { Config } from "tailwindcss";

const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
            },
            colors: {
                primary: "#180830",
                secondary: "#feca00",
                yellow: "#CAFB12",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "yellow-img": "url('/assets/yellow-bg.svg')",
            },
            fontFamily: {
                moul: ["Moul"],
                lato: ["Lato"],
                monoton: ["Monoton"],
                anybody: ["Anybody"],
                blackops: ["BlackOps"],
                inter: ["Inter"],
                sulpher: ["SulphurPoint"],
            },
            animation: {
                grid: "grid 15s linear infinite",
                scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
                marquee: "marquee var(--duration) linear infinite",
                "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
                shake: "shake 0.3s infinite",
                shakeleft: "shakeleft 0.3s infinite",
            },
            keyframes: {
                marquee: {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(calc(-100% - var(--gap)))" },
                },
                "marquee-vertical": {
                    from: { transform: "translateY(0)" },
                    to: { transform: "translateY(calc(-100% - var(--gap)))" },
                },
                grid: {
                    "0%": { transform: "translateY(-50%)" },
                    "100%": { transform: "translateY(0)" },
                },
                "shine-pulse": {
                    "0%": {
                        "background-position": "0% 0%",
                    },
                    "50%": {
                        "background-position": "100% 100%",
                    },
                    to: {
                        "background-position": "0% 0%",
                    },
                },
                scroll: {
                    to: {
                        transform: "translate(calc(-50% - 0.5rem))",
                    },
                },
                shake: {
                    "25%, 75%": {
                        transform: "rotate(30deg)",
                    },
                    "100%, 50%, 0%": {
                        transform: "rotate(20deg)",
                    },
                },
                shakeleft: {
                    "25%, 75%": {
                        transform: "rotate(-30deg)",
                    },
                    "100%, 50%, 0%": {
                        transform: "rotate(-20deg)",
                    },
                },
            },
        },
    },
    plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars,
    });
}

export default config;
