/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'hn-orange': '#FF6600',
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
            },
            keyframes: {
                '0%, 100%': { transform: 'rotate(-3deg)' },
                '50%': { transform: 'rotate(3deg)' },
            },
        },
    },
    plugins: [],
};
