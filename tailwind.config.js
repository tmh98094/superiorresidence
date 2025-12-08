/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                display: ['Optima', 'serif'],
                serif: ['New York', 'Georgia', 'serif'],
                sans: ['Century Gothic', 'system-ui', 'sans-serif'],
            },
            colors: {
                'forest-black': '#0a0f0d',
                'forest-dark': '#1a211e',
                'gold-accent': '#c5a059',
                'stone-light': '#e6e2dd',
                'misty-green': '#2d3e35',
                'misty-green-dark': '#1f2d26',
            },
            animation: {
                'ken-burns': 'ken-burns 20s ease-out forwards',
                'fade-up-slow': 'fade-up 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            },
            keyframes: {
                'ken-burns': {
                    '0%': { transform: 'scale(1.1)' },
                    '100%': { transform: 'scale(1.0)' },
                },
                'fade-up': {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        }
    },
    plugins: [],
}
